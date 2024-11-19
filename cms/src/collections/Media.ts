import { CollectionGroups } from '@/shared/CollectionGroups'
import createMediaCollection from '@/plugins/payload-cloudinary/collections/Media'

export const Media = createMediaCollection({
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
  overrides: {
    admin: {
      group: CollectionGroups.MediaCollections,
    },
  },
})
