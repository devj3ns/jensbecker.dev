import { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
import { parentField } from '@/fields/parent'
import pathField from '@/fields/path'
import breadcrumbs from '@/fields/breadcrumbs'
import { setVirtualFields } from '@/hooks/setVirtualFields'
import { previewButtonField } from '@/fields/preview'

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
      name: 'hero',
      label: 'Hero Section',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'subtitle',
          type: 'textarea',
          localized: true,
          required: true,
        },
        {
          name: 'links',
          type: 'array',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'page',
              type: 'relationship',
              relationTo: 'pages',
              required: true,
            },
          ],
        },
      ],
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
