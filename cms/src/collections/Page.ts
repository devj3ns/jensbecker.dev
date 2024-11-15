import { CollectionConfig } from 'payload'
import { RichTextBlock } from '@/blocks/RichTextBlock'
import { ServicesBlock } from '@/blocks/ServicesBlock'
import { TestimonialsBlock } from '@/blocks/TestimonialsBlock'
import { linkFields } from '@/fields/link'
import { CollectionGroups } from '@/shared/CollectionGroups'
import { createPageCollectionConfig } from '@/plugins/payload-pages/PageCollectionConfig'

const Page: CollectionConfig = createPageCollectionConfig({
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
  page: {
    parentCollection: 'pages',
    parentField: 'parent',
  },
  fields: [
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
})

export default Page
