import { CollectionGroups } from '@/shared/CollectionGroups'
import { createMediaCollectionConfig } from '@jhb.software/payload-cloudinary-plugin'

export const Media = createMediaCollectionConfig({
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
