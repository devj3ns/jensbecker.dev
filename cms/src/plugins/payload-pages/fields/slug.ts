import { Field } from 'payload'
import { beforeDuplicateSlug } from '../hooks/beforeDuplicate'
import { validateSlug } from '../hooks/validateSlug'
import { PageCollectionConfigAttributes } from '../PageCollectionConfig'

function slug(pageConfig: PageCollectionConfigAttributes): Field {
  return {
    name: 'slug',
    type: 'text',
    admin: {
      position: 'sidebar',
      components: {
        Field: '/plugins/payload-pages/components/Slug',
      },
    },
    hooks: {
      beforeDuplicate: [beforeDuplicateSlug],
      beforeValidate: [validateSlug(pageConfig.breadcrumbLabelField!)],
    },
    localized: true,
    required: true,
  }
}

export default slug
