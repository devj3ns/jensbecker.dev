import { PayloadRequest, SanitizedCollectionConfig } from 'payload'
import { Config } from '../../payload-types'
import { pathFromBreadcrumbs } from '@/hooks/utils/pathFromBreadcrumbs'
import getParents from '@/hooks/utils/getParents'
import { Breadcrumb } from '@/utils/types/breadcrumb'
import { locales } from '@/utils/types/locales'
import { CollectionConfigAttributes } from '@/shared/CollectionConfigAttributes'

/** Returns the breadcrumbs to the given document for a specific locale. */
export async function getBreadcrumbsForLocale({
  req,
  data,
  locale,
  collection,
}: {
  req: PayloadRequest
  data: any
  locale: Config['locale']
  collection: SanitizedCollectionConfig
}): Promise<Breadcrumb[]> {
  const { breadcrumbLabelField, parentField, parentCollection } =
    collection.custom as CollectionConfigAttributes

  var parentBreadcrumbs = []

  const parents = await getParents(req, locale, parentField, parentCollection, data, [])

  parentBreadcrumbs = parents.map((doc) => {
    return {
      // @ts-ignore
      slug: doc.slug as string,
      // @ts-ignore
      path: doc.path as string,
      // @ts-ignore
      label: doc[breadcrumbLabelField] as string,
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
  data,
  collection,
}: {
  req: PayloadRequest
  data: any
  collection: SanitizedCollectionConfig
}): Promise<Record<Config['locale'], Breadcrumb[]>> {
  const { parentField, parentCollection, breadcrumbLabelField } =
    collection.custom as CollectionConfigAttributes

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
          label: doc[breadcrumbLabelField][locale] as string,
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
