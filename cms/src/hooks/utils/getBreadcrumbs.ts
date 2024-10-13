import { PayloadRequest } from 'payload'
import { Config } from '../../payload-types'
import { pathFromBreadcrumbs } from '@/hooks/utils/pathFromBreadcrumbs'
import getParents from '@/hooks/utils/getParents'
import { Breadcrumb } from '@/utils/types/breadcrumb'
import { locales } from '@/utils/types/locales'

/** Returns the breadcrumbs to the given document for a specific locale. */
export async function getBreadcrumbsForLocale({
  req,
  parentField,
  parentCollection,
  data,
  locale,
}: {
  req: PayloadRequest
  parentField: string
  parentCollection: string
  data: any
  locale: Config['locale']
}): Promise<Breadcrumb[]> {
  var parentBreadcrumbs = []

  const parents = await getParents(req, locale, parentField, parentCollection, data, [])

  parentBreadcrumbs = parents.map((doc) => {
    return {
      // @ts-ignore
      slug: doc.slug as string,
      // @ts-ignore
      path: doc.path as string,
      // @ts-ignore
      label: doc.title as string,
    }
  })

  return [
    ...parentBreadcrumbs,
    {
      slug: data.slug,
      path: pathFromBreadcrumbs({
        locale: locale,
        breadcrumbs: parentBreadcrumbs,
        additionalSlug: data.slug,
      }),
      label: data.title,
    },
  ]
}

/** Returns a list of breadcrumbs (containing all locales) to the given document. */
export async function getBreadcrumbsForAllLocales({
  req,
  parentField,
  parentCollection,
  data,
}: {
  req: PayloadRequest
  parentField: string
  parentCollection: string
  data: any
}): Promise<Record<Config['locale'], Breadcrumb[]>> {
  var parentBreadcrumbs: Record<Config['locale'], Breadcrumb[]> = locales.reduce(
    (acc, locale) => {
      acc[locale] = []
      return acc
    },
    {} as Record<Config['locale'], Breadcrumb[]>,
  )

  const parents = await getParents(req, 'all', parentField, parentCollection, data, [])

  parentBreadcrumbs = locales.reduce(
    (acc, locale) => {
      acc[locale] = parents.map((doc) => {
        return {
          // @ts-ignore
          slug: doc.slug[locale] as string,
          // @ts-ignore
          path: doc.path[locale] as string,
          // @ts-ignore
          label: (doc.shortTitle?.[locale] ?? doc.title[locale]) as string,
        }
      })
      return acc
    },
    {} as Record<Config['locale'], Breadcrumb[]>,
  )

  return {
    de: [
      ...parentBreadcrumbs.de,
      {
        slug: data.slug.de,
        path: pathFromBreadcrumbs({
          locale: 'de',
          breadcrumbs: parentBreadcrumbs.de,
          additionalSlug: data.slug.de,
        }),
        label: data.shortTitle?.de ?? data.title.de,
      },
    ],
    en: [
      ...parentBreadcrumbs.en,
      {
        slug: data.slug.en,
        path: pathFromBreadcrumbs({
          locale: 'en',
          breadcrumbs: parentBreadcrumbs.en,
          additionalSlug: data.slug.en,
        }),
        label: data.shortTitle?.en ?? data.title.en,
      },
    ],
  }
}
