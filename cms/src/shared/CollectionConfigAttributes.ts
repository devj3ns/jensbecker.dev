import { CollectionSlug } from 'payload'

/** Custom attributes for a collection config which are primarily used in collection and field hooks. */
export type CollectionConfigAttributes = {
  /** Collection in which the parent document is stored.*/
  parentCollection: CollectionSlug

  /** Name of the field which stores the parent document. */
  parentField: string

  /**
   * Name of the field to use to generate the breadcrumb label.
   * Most of the time this will be the field which is set as the 'useAsTitle' field.
   * */
  breadcrumbLabelField: string
}
