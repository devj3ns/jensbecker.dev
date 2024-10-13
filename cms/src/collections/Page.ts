import { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
import { parentField } from '@/fields/parent'

const Page: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: {
      de: 'Seite',
      en: 'Page',
    },
    plural: {
      de: 'Seiten',
      en: 'Pages',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    slugField(),
    parentField(),
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
      localized: true,
    },
  ],
}

export default Page
