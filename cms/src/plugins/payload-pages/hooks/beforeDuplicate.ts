import { FieldHook } from 'payload'

const translations = {
  de: {
    coppy: 'Kopie',
  },
  en: {
    copy: 'Copy',
  },
} as const

/** Hooks which adjusts the slug to make sure the slug is still unique after duplication. */
export const beforeDuplicateSlug: FieldHook<any, any, any> = ({ data, siblingData, value }) => {
  const locale = 'en' // TODO: get the locale

  return value?.slug ? value.slug + '-' + translations[locale]?.copy?.toLowerCase() : undefined
}

/** Hooks which adjusts the title to indicate this is a copy. */
export const beforeDuplicateTitle: FieldHook<any, any, any> = ({ data, siblingData, value }) => {
  const locale = 'en' // TODO: get the locale

  return value?.title ? value.title + ' - ' + translations[locale]?.copy?.toLowerCase() : undefined
}
