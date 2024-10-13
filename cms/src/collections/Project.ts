import { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
import { parentField } from '@/fields/parent'
import pathField from '@/fields/path'
import breadcrumbs from '@/fields/breadcrumbs'
import { setVirtualFields } from '@/hooks/setVirtualFields'
import { previewButtonField } from '@/fields/preview'

const Projects: CollectionConfig = {
  slug: 'projects',
  labels: {
    singular: {
      de: 'Projekt',
      en: 'Project',
    },
    plural: {
      de: 'Projekte',
      en: 'Projects',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'path'],
  },
  versions: {
    drafts: true,
  },
  hooks: {
    beforeRead: [setVirtualFields({ parentCollection: 'pages', parentField: 'parent' })],
  },
  fields: [
    previewButtonField(),
    slugField(),
    parentField(),
    pathField(),
    breadcrumbs(),
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
