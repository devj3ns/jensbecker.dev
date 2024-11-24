import { Field } from 'payload'

/** Additional fields for SEO which can be added to the seo fields by the payload seo plugin. */
export const seoFields = (): Field[] => [
  {
    name: 'keywords',
    admin: {
      description:
        'Keywords that indicate what the page is about. These are used for generating the meta description.',
      components: {
        Label: '/plugins/payload-ai-meta-description/components/KeywordsFieldLabel',
        RowLabel: '/plugins/payload-ai-meta-description/components/KeywordsFieldRowLabel',
      },
      initCollapsed: true,
    },
    label: {
      de: 'Schlagwörter',
      en: 'Keywords',
    },
    type: 'array',
    required: true,
    localized: true,
    minRows: 1,
    maxRows: 5,
    fields: [
      {
        name: 'keyword',
        type: 'text',
        required: true,
        localized: true,
        maxLength: 100,
        // do not show a label as the array label already includes the label
        label: '',
      },
    ],
  },
]
