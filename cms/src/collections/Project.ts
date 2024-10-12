import { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'

const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: 'Projekt',
    plural: 'Projekte',
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

export default Projects
