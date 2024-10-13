import type { Field } from 'payload'

import deepMerge from '../utils/deepMerge'

type Parent = (overrides?: Partial<Field>) => Field

export const parentField: Parent = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'parent',
      label: 'Parent',
      type: 'relationship',
      relationTo: 'pages',
      // Exclude the current page from the list of available parents:
      filterOptions: ({ id }) => ({
        id: {
          not_equals: id,
        },
      }),
      admin: {
        position: 'sidebar',
      },
    },
    overrides,
  )
