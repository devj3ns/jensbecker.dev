import { CollectionConfig } from 'payload'
import { validateRedirect } from '../hooks/validateRedirect'

// In contrast to the Payloads Redirects plugin (https://payloadcms.com/docs/plugins/redirects)
// this collection supports validation rules, a permanent and a reason field.

// TODO: also store the destination page inside a relationship field

const createRedirectsCollection = ({
  overrides = {
    admin: {},
    access: {},
    hooks: {},
    labels: {},
  },
}: {
  overrides: {
    admin?: CollectionConfig['admin']
    access?: CollectionConfig['access']
    hooks?: CollectionConfig['hooks']
    labels?: CollectionConfig['labels']
  }
}): CollectionConfig => ({
  slug: 'redirects',
  admin: {
    defaultColumns: ['sourcePath', 'destinationPath', 'permanent', 'createdAt'],
    listSearchableFields: ['sourcePath', 'destinationPath'],
    ...overrides.admin,
  },
  labels: {
    ...overrides.labels,
  },
  access: {
    ...overrides.access,
  },
  hooks: {
    beforeValidate: [validateRedirect],
    ...overrides.hooks,
  },
  fields: [
    {
      name: 'sourcePath',
      type: 'text',
      required: true,
      admin: {
        placeholder: '/',
      },
      // @ts-ignore
      validate: (value, { siblingData }) => {
        const destinationPath = siblingData.destinationPath

        if (!value) {
          return 'A source path is required'
        } else if (destinationPath === value) {
          return 'The provided path must be different from the destination path'
        } else if (value && !value.startsWith('/')) {
          return 'A path must start with a forward slash (/)'
        }

        return true
      },
    },
    {
      name: 'destinationPath',
      type: 'text',
      required: true,
      admin: {
        placeholder: '/',
      },
      // @ts-ignore
      validate: (value: string, { siblingData }) => {
        const sourcePath = siblingData.sourcePath

        if (!value) {
          return 'A destination path is required'
        } else if (sourcePath === value) {
          return 'The provided path must be different from the source path'
        } else if (value && !value.startsWith('/')) {
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
      type: 'textarea',
      required: false,
    },
  ],
})

export default createRedirectsCollection
