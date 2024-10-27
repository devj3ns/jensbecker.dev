import { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
import { parentField } from '@/fields/parent'
import pathField from '@/fields/path'
import breadcrumbs from '@/fields/breadcrumbs'
import { setVirtualFields } from '@/hooks/setVirtualFields'
import { previewButtonField } from '@/fields/preview'
import { RichTextBlock } from '@/blocks/RichTextBlock'
import { ServicesBlock } from '@/blocks/ServicesBlock'
import { TestimonialsBlock } from '@/blocks/TestimonialsBlock'
import { linkFields } from '@/fields/link'
import { CollectionGroups } from '@/shared/CollectionGroups'

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
    defaultColumns: ['title', 'path', 'updatedAt', 'status'],
    group: CollectionGroups.PagesCollections,
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
      type: 'group',
      label: {
        de: 'Hero Abschnitt',
        en: 'Hero Section',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
          label: {
            de: 'Titel',
            en: 'Title',
          },
        },
        {
          name: 'subtitle',
          type: 'textarea',
          localized: true,
          required: true,
          label: {
            de: 'Untertitel',
            en: 'Subtitle',
          },
        },
        {
          name: 'links',
          type: 'array',
          fields: linkFields({ relationTo: ['pages'] }),
        },
      ],
    },
    {
      name: 'sections',
      type: 'array',
      label: {
        de: 'Abschnitte',
        en: 'Sections',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          localized: true,
          label: {
            de: 'Titel',
            en: 'Title',
          },
        },
        {
          name: 'subTitle',
          type: 'textarea',
          localized: true,
          label: {
            de: 'Untertitel',
            en: 'Subtitle',
          },
        },
        {
          name: 'blocks',
          type: 'blocks',
          blocks: [RichTextBlock, ServicesBlock, TestimonialsBlock],
          label: {
            de: 'Blöcke',
            en: 'Blocks',
          },
        },
      ],
    },
  ],
}

export default Page
