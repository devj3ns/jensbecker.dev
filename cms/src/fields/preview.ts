import { Field } from 'payload'

export function previewButtonField(): Field {
  return {
    name: 'previewButton',
    type: 'ui',
    admin: {
      components: {
        Field: '/fields/components/PreviewButtonComponent',
      },
      position: 'sidebar',
    },
  }
}
