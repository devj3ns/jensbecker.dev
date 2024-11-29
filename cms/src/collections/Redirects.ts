import createRedirectsCollection from '@/plugins/payload-pages/collections/Redirects'
import { CollectionGroups } from '@/shared/CollectionGroups'

export const Redirects = createRedirectsCollection({
  overrides: {
    admin: {
      group: CollectionGroups.SystemCollections,
    },
  },
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
})
