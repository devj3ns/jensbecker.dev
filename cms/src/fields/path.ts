import { Field } from 'payload'

/**
 * Creates a virtual path field that generates the path based on the parents' slugs, the document's slug and the locale.
 *
 * It is not stored in the database, because this would not automatically reflect changes in the parent(s) slug(s).
 *
 * For information about virtual fields, see https://payloadcms.com/blog/learn-how-virtual-fields-can-help-solve-common-cms-challenges
 */
function pathField(): Field {
  return {
    name: 'path',
    type: 'text',
    required: true,
    virtual: true,
    admin: {
      readOnly: true,
      position: 'sidebar',
    },
    hooks: {
      afterRead: [
        // The path is generated in the getVirtualFields collection hook
      ],
    },
  }
}

export default pathField
