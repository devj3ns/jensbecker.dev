import type { CollectionConfig } from 'payload'
import afterDeleteHook from '../hooks/afterDelete'
import beforeChangeHook from '../hooks/beforeChange'

// TODO: use https://github.com/payloadcms/payload/pull/8999 once it's released

/**
 * Creates the `CollectionConfig` for a Media collection with all hooks and fields needed for Cloudinary integration.
 */
const createMediaCollection = ({
  slug,
  labels,
  access = {},
  overrides,
}: {
  slug: string
  labels?: CollectionConfig['labels']
  access?: CollectionConfig['access']
  overrides: {
    admin?: CollectionConfig['admin']
    fields?: CollectionConfig['fields']
    uploads?: {
      mimeTypes?: string[]
    }
  }
}): CollectionConfig => ({
  slug,
  labels,
  admin: {
    defaultColumns: ['filename', 'alt', 'createdAt'],
    listSearchableFields: ['filename', 'alt'],
    ...overrides.admin,
  },
  disableDuplicate: true,
  access: access,
  hooks: {
    beforeChange: [beforeChangeHook],
    afterDelete: [afterDeleteHook],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      localized: true,
      required: true,
    },
    {
      // This field is needed to delete and update cloudinary files.
      name: 'cloudinaryPublicId',
      type: 'text',
      required: true,
      access: {
        create: () => false,
        update: () => false,
      },
      admin: {
        position: 'sidebar',
        readOnly: true,
        // hide the field before the file is uploaded and the id is generated:
        condition: (data) => Boolean(data?.cloudinaryPublicId),
      },
    },
    // Payload automatically adds a `url` field to media collections.
    // To override its value to match the Cloudinary URL, we need to define it here. Otherwise updates to the media document would fail.
    {
      name: 'url',
      type: 'text',
      admin: {
        hidden: true,
        readOnly: true,
      },
      hooks: {
        afterRead: [
          async ({ data }) => {
            return data?.cloudinaryURL
          },
        ],
      },
      label: 'URL',
    },
    {
      name: 'cloudinaryURL',
      label: 'Cloudinary URL',
      type: 'text',
      required: true,
      access: {
        create: () => false,
        update: () => false,
      },
      admin: {
        position: 'sidebar',
        readOnly: true,
        // hide the field before the file is uploaded and the URL is generated:
        condition: (data) => Boolean(data?.cloudinaryURL),
      },
    },
    ...(overrides.fields ?? []),
  ],
  upload: {
    mimeTypes: overrides.uploads?.mimeTypes,
    disableLocalStorage: true,
    crop: false,
    adminThumbnail: ({ doc }) => {
      const cloudinaryCloudName = process.env.CLOUDINARY_CLOUD_NAME

      if (!cloudinaryCloudName) {
        throw new Error('CLOUDINARY_CLOUD_NAME ENV variable not set')
      }

      return `https://res.cloudinary.com/${cloudinaryCloudName}/image/upload/w_300,h_300,c_fill/f_auto,q_auto,dpr_auto/${doc.cloudinaryPublicId}`
    },
  },
})

export default createMediaCollection
