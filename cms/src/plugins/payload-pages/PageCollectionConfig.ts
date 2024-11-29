import { CollectionConfig, CollectionSlug } from 'payload'
import { setVirtualFieldsAfterChange, setVirtualFieldsBeforeRead } from './hooks/setVirtualFields'
import { beforeDuplicateTitle } from './hooks/beforeDuplicate'
import { previewButton } from './fields/previewButton'
import breadcrumbs from './fields/breadcrumbs'
import path from './fields/path'
import slug from './fields/slug'
import parent from './fields/parent'

export type PageCollectionConfig = CollectionConfig & {
  page: PageCollectionConfigAttributes
}

// TODO: find a solution to make the breadcrumbLabelField and sharedParentDocument optional in the parameters
//       of the createPageCollectionConfig function, set the defaults there and ensure that the collection config
//       always has values for these fields set.

/** Custom attributes for a collection config which are primarily used in collection and field hooks. */
export type PageCollectionConfigAttributes = {
  /** Collection in which the parent document is stored. */
  parentCollection: CollectionSlug

  /** Name of the field to store the parent document. */
  parentField: string

  /** Whether all documents share the same parent document. Defaults to `false`. */
  sharedParentDocument?: boolean

  /**
   * Name of the field to use to generate the breadcrumb label.
   * Most of the time this will be the field which is set as the 'useAsTitle' field.
   *
   * Defaults to `admin.useAsTitle`.
   **/
  breadcrumbLabelField?: string

  /**
   * Name of the field to use as fallback for the slug field.
   *
   * Defaults to `title`.
   */
  slugFallbackField?: string
}

/**
 * Creates a collection config for a page-like collection by adding:
 * - Page attributes as custom attributes for use in hooks
 * - Required parent relationship field in the sidebar
 * - Hidden breadcrumbs array field
 * - Hooks for managing virtual fields and page duplication
 */
export const createPageCollectionConfig = (config: PageCollectionConfig): PageCollectionConfig => {
  const titleField = config.page.breadcrumbLabelField ?? config.admin?.useAsTitle ?? 'title'

  const pageConfig = {
    ...config.page,
    breadcrumbLabelField: titleField,
    sharedParentDocument: config.page.sharedParentDocument ?? false,
    slugFallbackField: config.page.slugFallbackField ?? 'title',
  } as PageCollectionConfigAttributes

  return {
    ...config,
    custom: {
      // copy the PageCollectionConfigAttributes to the custom field to make it available in hooks etc.
      pageConfig,
    },
    page: pageConfig,
    hooks: {
      ...config.hooks,
      beforeRead: [...(config.hooks?.beforeRead || []), setVirtualFieldsBeforeRead],
      afterChange: [...(config.hooks?.afterChange || []), setVirtualFieldsAfterChange],
    },
    fields: [
      previewButton(),
      slug({ redirectWarning: true, fallbackField: pageConfig.slugFallbackField }),
      parent(pageConfig),
      path(),
      breadcrumbs(),
      // adding the user defined fields below the fields defined by the plugin to ensure a correct order in the sidebar
      ...(config.fields.map((field) => {
        if ('name' in field && field.name === titleField) {
          return {
            ...field,
            hooks: {
              beforeDuplicate: [beforeDuplicateTitle],
            },
          }
        }
        return field
      }) || []),
    ],
  }
}

/** Checks if the config is a PageCollectionConfig. */
export const isPageCollectionConfig = (
  config: CollectionConfig,
): config is PageCollectionConfig => {
  if (!config) {
    console.error('config is not defined')
    return false
  }

  return 'page' in config && typeof config.page === 'object'
}

/**
 * Returns the PageCollectionConfig or null if the config is not a PageCollectionConfig.
 *
 * This provides type-safe access to the page attributes.
 */
export const asPageCollectionConfig = (config: CollectionConfig): PageCollectionConfig | null => {
  if (isPageCollectionConfig(config)) {
    return config
  }
  return null
}

/**
 * Returns the PageCollectionConfig or throws an error if the config is not a PageCollectionConfig.
 *
 * This provides type-safe access to the page attributes.
 */
export const asPageCollectionConfigOrThrow = (config: CollectionConfig): PageCollectionConfig => {
  if (isPageCollectionConfig(config)) {
    return config
  }

  throw new Error('Collection is not a page collection')
}
