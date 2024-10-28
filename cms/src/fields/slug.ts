import type { Field } from 'payload'

import { validateSlug } from '../hooks/formatSlug'
import deepMerge from '../utils/deepMerge'

type Slug = (fallbackField?: string, overrides?: Partial<Field>) => Field

export const slugField: Slug = (fallbackField = 'title', overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      index: true,
      unique: true,
      required: true,
      localized: true,
      admin: {
        position: 'sidebar',
        components: {
          Field: {
            clientProps: {
              fallbackField: fallbackField,
            },
            path: '/fields/components/SlugFieldComponent',
          },
        },
      },
      hooks: {
        beforeValidate: [validateSlug(fallbackField)],
      },
    },
    overrides,
  )
