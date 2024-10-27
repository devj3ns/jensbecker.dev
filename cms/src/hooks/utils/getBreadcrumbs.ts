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

  const parents = await getParents(req, locale, parentField, parentCollection, data, [])
  const parentBreadcrumbs = parents.map((doc: any) =>
    docToBreadcrumb(doc, breadcrumbLabelField, locale),
  )

  const doc = {
    ...data,
    path: pathFromBreadcrumbs({
      locale,
      breadcrumbs: parentBreadcrumbs,
      additionalSlug: data.slug,
    }),
  }

  return [...parentBreadcrumbs, docToBreadcrumb(doc, breadcrumbLabelField, locale)]
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

  const parents = await getParents(req, 'all', parentField, parentCollection, data, [])

  const breadcrumbs = locales.reduce(
    (acc, locale) => {
      const parentBreadcrumbs = parents.map((doc) =>
        docToBreadcrumb(doc, breadcrumbLabelField, locale),
      )

      const doc = {
        ...data,
        path: pathFromBreadcrumbs({
          locale,
          breadcrumbs: parentBreadcrumbs,
          additionalSlug: data.slug[locale],
        }),
      }

      acc[locale] = [...parentBreadcrumbs, docToBreadcrumb(doc, breadcrumbLabelField, locale)]
      return acc
    },
    {} as Record<Config['locale'], Breadcrumb[]>,
  )

  return breadcrumbs
}

/** Converts a localized or unlocalized document to a breadcrumb. */
function docToBreadcrumb(
  doc: any,
  breadcrumbLabelField: string,
  locale: Config['locale'],
): Breadcrumb {
  return {
    slug: typeof doc.slug === 'string' ? doc.slug : doc.slug?.[locale],
    path: typeof doc.path === 'string' ? doc.path : doc.path?.[locale],
    label: doc[breadcrumbLabelField]?.[locale] ?? doc[breadcrumbLabelField],
  }
}
