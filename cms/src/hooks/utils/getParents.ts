import { Config } from '../../payload-types'

/**
 *  Recursively get all parent documents of a document.
 * */
const getParents = async (
  req: any,
  locale: Config['locale'] | 'all',
  parentField: string,
  collection: string,
  doc: Record<string, unknown>,
  docs: Array<Record<string, unknown>> = [],
): Promise<Array<Record<string, unknown>>> => {
  const parent = doc[parentField]
  let retrievedParent

  if (parent) {
    // If not auto-populated, and we have an ID
    if (typeof parent === 'string' || typeof parent === 'number') {
      retrievedParent = await req.payload.findByID({
        id: parent,
        collection: collection,
        depth: 0,
        disableErrors: true,
        locale: locale,
        // IMPORTANT: do not pass the req here, otherwise there will be issues with the locale flattening
      })
    }

    // If auto-populated
    if (typeof parent === 'object') {
      retrievedParent = parent
    }

    if (retrievedParent) {
      if (retrievedParent.parent) {
        return getParents(req, locale, 'parent', 'pages', retrievedParent, [
          retrievedParent,
          ...docs,
        ])
      }

      return [retrievedParent, ...docs]
    }
  }

  return docs
}

export default getParents
