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
      filterOptions: ({ data }) => {
        // It would make sense to filter by the document ID here. However, for a postgres database, where the ids
        // are just sequential numbers, this can hide documents with the same ID in a different collection.
        return {
          slug: {
            not_equals: data.slug,
          },
        }

        // This would be the best way to solve this, but the current collection is not accessible here.
        // if(relationTo !== collection) {
        //   return {
        //     id: {
        //       not_equals: id,
        //     },
        //   }
        // }
      },
      admin: {
        position: 'sidebar',
      },
    },
    overrides,
  )
