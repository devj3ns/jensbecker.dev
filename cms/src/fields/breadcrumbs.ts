import { Field } from 'payload'

/**
 * Creates a virtual breadcrumbs field that generates the breadcrumbs based on the documents parents.
 *
 * It is not stored in the database, because this would not automatically reflect changes in the parent(s) slug(s).
 *
 * For information about virtual fields, see https://payloadcms.com/blog/learn-how-virtual-fields-can-help-solve-common-cms-challenges
 */
function breadcrumbs(): Field {
  return {
    name: 'breadcrumbs',
    interfaceName: 'Breadcrumbs',
    type: 'array',
    required: true,
    virtual: true,
    fields: [
      {
        type: 'row',
        fields: [
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
        // The breadcrumbs are generated in the setVirtualFields collection hook
      ],
    },
  }
}

export default breadcrumbs
