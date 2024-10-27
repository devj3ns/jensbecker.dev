import { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
import { parentField } from '@/fields/parent'
import pathField from '@/fields/path'
import breadcrumbs from '@/fields/breadcrumbs'
import { setVirtualFieldsAfterChange, setVirtualFieldsBeforeRead } from '@/hooks/setVirtualFields'
import { previewButtonField } from '@/fields/preview'
import { CollectionGroups } from '@/shared/CollectionGroups'

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
    defaultColumns: ['title', 'path', 'updatedAt', 'status'],
    group: CollectionGroups.PagesCollections,
  },
  versions: {
    drafts: true,
  },
  hooks: {
    beforeRead: [setVirtualFieldsBeforeRead({ parentCollection: 'pages', parentField: 'parent' })],
    afterChange: [
      setVirtualFieldsAfterChange({ parentCollection: 'pages', parentField: 'parent' }),
    ],
  },
  fields: [
    // Sidebar page related fields:
    previewButtonField(),
    slugField(),
    parentField(),
    pathField(),
    breadcrumbs(),

    // Sidebar document related fields:
    {
      name: 'startDate',
      type: 'date',
      label: {
        en: 'Start Date',
        de: 'Startdatum',
      },
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'endDate',
      type: 'date',
      label: {
        en: 'End Date',
        de: 'Enddatum',
      },
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: {
        en: 'Featured',
        de: 'Hervorgehoben',
      },
      required: true,
      admin: {
        position: 'sidebar',
        description: {
          en: 'Whether the project should be shown in the featured projects section.',
          de: 'Ob das Projekt in der hervorgehobenen Projekte-Section angezeigt werden soll.',
        },
      },
    },

    // Body fields:
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Title',
        de: 'Titel',
      },
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      localized: true,
      label: {
        en: 'Excerpt',
        de: 'Kurzbeschreibung',
      },
    },
    {
      name: 'tags',
      type: 'select',
      hasMany: true,
      label: {
        en: 'Tags',
        de: 'Tags',
      },
      required: true,
      options: [
        {
          label: 'Web-App',
          value: 'web-app',
        },
        {
          label: 'Website',
          value: 'website',
        },
        {
          label: 'Mobile App',
          value: 'app',
        },
        {
          label: 'SEO',
          value: 'seo',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: {
        en: 'Image',
        de: 'Bild',
      },
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
      localized: true,
      label: {
        en: 'Body',
        de: 'Inhalt',
      },
    },
  ],
}

export default Projects
