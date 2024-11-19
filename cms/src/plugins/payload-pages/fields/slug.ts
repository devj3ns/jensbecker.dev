import { Field } from 'payload'
import { beforeDuplicateSlug } from '../hooks/beforeDuplicate'
import { validateSlug } from '../hooks/validateSlug'

// Note: make sure this field can be used separately from the PagesCollectionConfig (e.g. a non page collection needs a slug field as well)

function slug({ redirectWarning }: { redirectWarning: boolean }): Field {
  return {
    name: 'slug',
    type: 'text',
    admin: {
      position: 'sidebar',
      components: {
        Field: {
          path: '/plugins/payload-pages/components/Slug',
          clientProps: {
            redirectWarning: redirectWarning,
          },
        },
      },
    },
    hooks: {
      beforeDuplicate: [beforeDuplicateSlug],
      beforeValidate: [validateSlug],
    },
    unique: true,
    index: true,
    localized: true,
    required: true,
  }
}

export default slug
