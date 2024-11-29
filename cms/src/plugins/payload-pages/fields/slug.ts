import { Field } from 'payload'
import { beforeDuplicateSlug } from '../hooks/beforeDuplicate'
import { validateSlug } from '../hooks/validateSlug'

// Note: make sure this field can be used separately from the PagesCollectionConfig (e.g. a non page collection needs a slug field as well)

function slug({
  redirectWarning,
  fallbackField = 'title',
}: {
  redirectWarning: boolean
  fallbackField?: string
}): Field {
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
            fallbackField: fallbackField,
          },
        },
      },
    },
    hooks: {
      beforeDuplicate: [beforeDuplicateSlug],
      beforeValidate: [validateSlug(fallbackField)],
    },
    unique: true,
    index: true,
    localized: true,
    required: true,
  }
}

export default slug
