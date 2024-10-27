import type { CollectionConfig } from 'payload'
import { afterDeleteHook, beforeChangeHook } from '../hooks/cloudinary'
import { CollectionGroups } from '@/shared/CollectionGroups'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: {
      de: 'Mediendatei',
      en: 'Media File',
    },
    plural: {
      de: 'Medien',
      en: 'Media',
    },
  },
  admin: {
    listSearchableFields: ['filename', 'alt'],
    group: CollectionGroups.MediaCollections,
  },
  disableDuplicate: true,
  access: {
    read: () => true,
  },
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
        condition: (data) => Boolean(data?.cloudinaryPublicId),
      },
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
        condition: (data) => Boolean(data?.cloudinaryURL),
      },
    },
  ],
  upload: {
    mimeTypes: ['image/*'],
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
}
