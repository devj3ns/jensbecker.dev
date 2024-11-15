import { Field } from 'payload'

export function previewButton(): Field {
  return {
    name: 'previewButton',
    type: 'ui',
    admin: {
      components: {
        Field: '/plugins/payload-pages/components/PreviewButton',
      },
      position: 'sidebar',
    },
  }
}
