import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { de } from '@payloadcms/translations/languages/de'
import { en } from '@payloadcms/translations/languages/en'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import Page from './collections/Page'
import Project from './collections/Project'
import { Users } from './collections/Users'
import alternatePaths from './fields/alternatePaths'
import { getPageUrl } from './hooks/utils/getPageUrl'
import Testimonials from './collections/Testimonials'
import Header from './globals/header'
import Footer from './globals/footer'
import Redirects from './collections/Redirects'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  localization: {
    locales: [
      {
        code: 'de',
        label: 'Deutsch',
      },
      {
        code: 'en',
        label: 'Englisch',
      },
    ],
    defaultLocale: 'de',
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ` - ${process.env.PAYLOAD_PUBLIC_SITE_NAME} CMS`,
      // TODO: add favicon
    },
    avatar: 'default',
  },
  i18n: {
    fallbackLanguage: 'de',
    supportedLanguages: { en, de },
  },
  globals: [Header, Footer],
  collections: [Page, Project, Testimonials, Media, Redirects, Users],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || '',
    },
  }),
  sharp,
  plugins: [
    seoPlugin({
      collections: ['pages', 'projects'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `${doc.title} - ${process.env.PAYLOAD_PUBLIC_SITE_NAME}`,
      generateURL: ({ doc }) => getPageUrl({ path: doc.path })!,
      interfaceName: 'SeoMetadata',
      fields: [alternatePaths()],
      fieldOverrides: {
        title: {
          required: true,
          label: {
            de: 'Titel',
            en: 'Title',
          },
        },
        description: {
          required: true,
          label: {
            de: 'Beschreibung',
            en: 'Description',
          },
        },
        image: {
          label: {
            de: 'Bild',
            en: 'Image',
          },
        },
      },
    }),
  ],
})
