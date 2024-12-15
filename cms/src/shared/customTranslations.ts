import type { Config } from 'payload'
import type { NestedKeysStripped } from '@payloadcms/translations'
import { useTranslation } from '@payloadcms/ui'

// @ts-ignore
export const customTranslations: Config['i18n']['translations'] = {
  en: {
    section: 'Section',
    untitled: 'Untitled',
    unlabelled: 'Unlabelled',
  },
  de: {
    section: 'Abschnitt',
    untitled: 'Unbenannt',
    unlabelled: 'Unbeschriftet',
  },
}

export const useCustomTranslations = () =>
  useTranslation<CustomTranslationsObject, CustomTranslationsKeys>()

export type CustomTranslationsObject = typeof customTranslations.en
export type CustomTranslationsKeys = NestedKeysStripped<CustomTranslationsObject>
