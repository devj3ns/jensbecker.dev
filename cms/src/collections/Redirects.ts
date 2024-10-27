import { CollectionGroups } from '@/shared/CollectionGroups'
import { AdminPanelError } from '@/utils/AdminPanelError'
import { CollectionBeforeValidateHook, CollectionConfig } from 'payload'

// NOTE: Payloads Redirects plugin (https://payloadcms.com/docs/plugins/redirects) is not used, because
//       it does not support the validation rules, permanent and reason field.

// TODO: ensure that there is a page with the destination path in the database

/** Hook which validates the redirect data before it is saved to ensure that no infinite redirect loops are created. */
const validateRedirect: CollectionBeforeValidateHook = async ({ data, originalDoc, req }) => {
  // When the fields of a redirect are edited via the local API, the sourcePath and destinationPath fields might be undefined,
  // therefore fallback to the originalDoc values in this case.
  let sourcePath = data?.sourcePath ?? originalDoc?.sourcePath
  let destinationPath = data?.destinationPath ?? originalDoc?.destinationPath

  // Check if there's already a redirect for the source path
  const existingRedirect = await req.payload.find({
    collection: 'redirects',
    where: {
      sourcePath: { equals: sourcePath },
      id: originalDoc?.id ? { not_equals: originalDoc.id } : [], // Exclude current document if editing
    },
  })

  if (existingRedirect.docs.length > 0) {
    throw new AdminPanelError('A redirect for this source path already exists.', 409)
  }

  // Check for opposite redirects to prevent infinite redirect loops
  const oppositeRedirectStart = await req.payload.find({
    collection: 'redirects',
    where: {
      // NOTE: To also account for transitive redirects, check both directions separately using the "or" clause
      or: [
        { sourcePath: { equals: destinationPath } },
        { destinationPath: { equals: sourcePath } },
      ],
      id: originalDoc?.id ? { not_equals: originalDoc.id } : [], // Exclude current document if editing
    },
  })

  // because of the "or" clause, we need to check if the length is >= 2 instead of > 0
  if (oppositeRedirectStart.docs.length >= 2) {
    throw new AdminPanelError(
      'A redirect in the opposite direction already exists. Therefore this redirect would create an infinite redirect loop.',
      409,
    )
  }

  return data
}

const Redirects: CollectionConfig = {
  slug: 'redirects',
  labels: {
    singular: {
      de: 'Weiterleitung',
      en: 'Redirect',
    },
    plural: {
      de: 'Weiterleitungen',
      en: 'Redirects',
    },
  },
  admin: {
    defaultColumns: ['sourcePath', 'destinationPath', 'permanent'],
    listSearchableFields: ['sourcePath', 'destinationPath'],
    group: CollectionGroups.SystemCollections,
  },
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [validateRedirect],
  },
  fields: [
    {
      name: 'sourcePath',
      type: 'text',
      label: {
        de: 'Quellpfad',
        en: 'Source Path',
      },
      admin: {
        placeholder: '/',
      },
      required: true,
      // @ts-ignore
      validate: (value: string, siblingData: any) => {
        const destinationPath = siblingData.data.destinationPath

        if (destinationPath === value) {
          return 'The provided path must be different from the destination path'
        }

        if (value && !value.startsWith('/')) {
          return 'A path must start with a forward slash (/)'
        }

        return true
      },
    },
    {
      name: 'destinationPath',
      type: 'text',
      label: {
        de: 'Zielpfad',
        en: 'Destination Path',
      },
      admin: {
        placeholder: '/',
      },
      required: true,
      // @ts-ignore
      validate: (value: string, siblingData: any) => {
        const sourcePath = siblingData.data.sourcePath

        if (sourcePath === value) {
          return 'The provided path must be different from the source path'
        }

        if (value && !value.startsWith('/')) {
          return 'A path must start with a forward slash (/)'
        }

        return true
      },
    },
    {
      name: 'permanent',
      type: 'checkbox',
      required: true,
      defaultValue: true,
    },
    {
      name: 'reason',
      label: {
        de: 'Grund / Notiz',
        en: 'Reason / Note',
      },
      type: 'textarea',
      required: false,
    },
  ],
}

export default Redirects
