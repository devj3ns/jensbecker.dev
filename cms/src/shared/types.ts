import { Config } from '@/payload-types'

export type Locale = Config['locale']

// TODO: find a better way to define locales for iterating over them in some implementations
export const locales: Locale[] = ['en', 'de'] as const
