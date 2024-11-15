import { Field } from 'payload'

export type Breadcrumb = {
  path: string
  slug: string
  label: string
}

/**
 * Creates a virtual breadcrumbs field that generates the breadcrumbs based on the documents parents.
 *
 * It is not stored in the database, because this would not automatically reflect changes in the parent(s) slug(s).
 */
function breadcrumbs(): Field {
  return {
    name: 'breadcrumbs',
    type: 'array',
    required: true,
    virtual: true,
    // TODO: localize the whole group or each field?
    // When activating localized on the whole group, the breadcrumbs array returned by the API becomes empty for some reason...
    // localized: true,
    fields: [
      {
        type: 'row',
        fields: [
          // TODO: is the slug really needed for the breadcrumbs?
          {
            name: 'slug',
            required: true,
            type: 'text',
            admin: {
              width: '33%',
            },
          },
          {
            name: 'path',
            required: true,
            type: 'text',
            admin: {
              width: '33%',
            },
          },
          {
            name: 'label',
            required: true,
            type: 'text',
            admin: {
              width: '33%',
            },
          },
        ],
      },
    ],
    admin: {
      readOnly: true,
      position: 'sidebar',
    },
    hooks: {
      afterRead: [
        // The breadcrumbs are generated in the getVirtualFields collection hook
      ],
    },
  }
}

export default breadcrumbs
