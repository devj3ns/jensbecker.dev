import { CollectionAfterChangeHook, CollectionBeforeReadHook } from 'payload'
import { Config } from '../payload-types'
import { SeoMetadata } from '../payload-types'
import { getBreadcrumbsForAllLocales, getBreadcrumbsForLocale } from './utils/getBreadcrumbs'
import { pathFromBreadcrumbs } from './utils/pathFromBreadcrumbs'
import { Breadcrumb } from '@/utils/types/breadcrumb'
import { locales } from '@/utils/types/locales'

/**
 * A `CollectionBeforeReadHook` that sets the values for all virtual fields.
 *
 * A "before read" hook is used, because it is fired before localized fields are flattened which is necessary for generating the alternate paths.
 */
export const setVirtualFieldsBeforeRead: CollectionBeforeReadHook = async ({
  doc,
  req,
  collection,
}) => {
  const breadcrumbs = await getBreadcrumbsForAllLocales({
    req,
    collection,
    data: doc,
  })

  const paths: Record<Config['locale'], string> = locales.reduce(
    (acc, locale) => {
      // If the slug is not set for this locale, exclude the path to not generate a 404 path
      if (doc.slug[locale]) {
        acc[locale] = breadcrumbs[locale].at(-1)!.path
      }

      return acc
    },
    {} as Record<Config['locale'], string>,
  )

  const alternatePaths: SeoMetadata['alternatePaths'] = Object.entries(paths).map(
    ([locale, path]) => ({
      hreflang: locale,
      path,
    }),
  )

  // @ts-expect-error
  if (req.locale === 'all') {
    Object.values(paths).forEach(checkPath)

    Object.entries(paths).forEach(([locale, _]) =>
      checkBreadcrumbs(locale as Config['locale'], breadcrumbs[locale as Config['locale']]),
    )

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

/**
 * A `CollectionAfterChangeHook` that sets the values for all virtual fields.
 *
 * This "after change" hook is needed to re-fill the virtual fields after a document is changed/saved in the admin panel.
 */

export const setVirtualFieldsAfterChange: CollectionAfterChangeHook = async ({
  doc,
  req,
  collection,
}) => {
  // This type of hook is only called for one locale.
  const locale = req.locale as Config['locale']

  const breadcrumbs = await getBreadcrumbsForLocale({
    req,
    collection,
    data: doc,
    locale: locale,
  })

  const path = breadcrumbs.at(-1)!.path

  checkPath(path)
  checkBreadcrumbs(locale, breadcrumbs)

  return {
    ...doc,
    path: path,
    breadcrumbs: breadcrumbs,

    meta: {
      ...doc.meta,
      alternatePaths: [
        // Because this type of hook is only called for one locale, the alternatePaths field cannot be fully generated here.
        // But because this hook is only used for filling the virtual fields in the admin panel after a document is changed/saved, this is not a problem.
        // To not trigger a validation issue when publishing the document, partially set the alternatePaths field:
        {
          hreflang: locale,
          path: path,
        },
      ],
    },
  }
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
