import { Breadcrumbs, Config } from '../../payload-types'

/** Converts the given breadcrumbs and the locale to a path */
export function pathFromBreadcrumbs({
  locale,
  breadcrumbs,
  additionalSlug,
}: {
  locale: Config['locale']
  breadcrumbs: Breadcrumbs
  additionalSlug?: string
}): string {
  return [
    `/${locale}`,
    ...[...breadcrumbs.map(({ slug }) => slug), additionalSlug]
      .map((slug) => {
        // TODO: find a way to store "" or "/" as the slug for the frontpage, so this conversion is not necessary
        return slug === 'startseite' || slug === 'frontpage' ? '' : slug
      })
      .filter(Boolean),
  ].join('/')
}
