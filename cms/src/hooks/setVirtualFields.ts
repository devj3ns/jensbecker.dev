import { CollectionBeforeReadHook } from 'payload'
import { Config } from '../payload-types'
import { SeoMetadata } from '../payload-types'
import { getBreadcrumbsForAllLocales } from './utils/getBreadcrumbs'
import { pathFromBreadcrumbs } from './utils/pathFromBreadcrumbs'
import { Breadcrumb } from '@/utils/types/breadcrumb'
import { locales } from '@/utils/types/locales'

type VirtualFielsConfig = {
  /**
   * The name of the parent field.
   *
   * Default: "parent"
   */
  parentField?: string
  /**
   * The name of the collection the parent field relates to.
   *
   * Default: "pages"
   */
  parentCollection?: string
}

/**
 * Returns a [CollectionBeforeReadHook] that sets the values for all virtual fields.
 */
export function setVirtualFields({
  parentCollection = 'pages',
  parentField = 'parent',
}: VirtualFielsConfig): CollectionBeforeReadHook {
  const setVirtualFieldsHook: CollectionBeforeReadHook = async ({ doc, req, collection }) => {
    const breadcrumbs = await getBreadcrumbsForAllLocales({
      req,
      parentField,
      parentCollection,
      data: doc,
    })

    const paths: Record<Config['locale'], string> = locales.reduce(
      (acc, locale) => {
        acc[locale] = breadcrumbs[locale].at(-1)!.path
        return acc
      },
      {} as Record<Config['locale'], string>,
    )

    const alternatePaths: SeoMetadata['alternatePaths'] = locales.map((locale) => ({
      hreflang: locale,
      path: paths[locale],
    }))

    // @ts-expect-error
    if (req.locale === 'all') {
      for (const locale of locales) {
        checkPath(paths[locale])
        checkBreadcrumbs(locale, breadcrumbs[locale])
      }

      return {
        ...doc,
        path: paths,
        breadcrumbs,
        meta: {
          ...doc.meta,
          alternatePaths,
        },
      }
    } else {
      const locale = req.locale as Config['locale']

      checkPath(paths[locale])
      checkBreadcrumbs(locale, breadcrumbs[locale])

      return {
        ...doc,
        path: paths[locale],
        breadcrumbs: breadcrumbs[locale],
        meta: {
          ...doc.meta,
          alternatePaths,
        },
      }
    }
  }

  return setVirtualFieldsHook
}

/** Throws an error if the path generated from combining all breadcrumbs slugs is not equal to the path of the last breadcrumb. */
function checkBreadcrumbs(locale: Config['locale'], breadcrumbs: Breadcrumb[]) {
  if (
    pathFromBreadcrumbs({ locale: locale, breadcrumbs: breadcrumbs }) !== breadcrumbs.at(-1)?.path
  ) {
    throw new Error(
      'Path generated from breadcrumbs is not equal to the path of the last breadcrumb: ' +
        pathFromBreadcrumbs({ locale: locale, breadcrumbs: breadcrumbs }) +
        ' !== ' +
        breadcrumbs.at(-1)?.path,
    )
  }
}

/** Throws an error if the path is not valid. */
function checkPath(path: string) {
  if (
    path.includes('undefined') ||
    path.includes('null') ||
    path.includes('[object Object]') ||
    !path.startsWith('/') ||
    path.includes('//') ||
    path.endsWith('/')
  ) {
    throw new Error('Path is not valid: ' + path)
  }
}
