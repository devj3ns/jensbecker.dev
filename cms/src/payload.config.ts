import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
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

import Testimonials from './collections/Testimonials'
import Header from './globals/header'
import Footer from './globals/footer'
import { Redirects } from './collections/Redirects'
import { Page as PageType, Project as ProjectType } from './payload-types'
import { payloadSeoPlugin } from '@jhb.software/payload-seo-plugin'
import { payloadCloudinaryPlugin } from '@jhb.software/payload-cloudinary-plugin'
import {
  payloadPagesPlugin,
  alternatePathsField,
  getPageUrl,
} from '@jhb.software/payload-pages-plugin'

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
      titleSuffix: ` - ${process.env.NEXT_PUBLIC_SITE_NAME} CMS`,
      // TODO: add favicon
    },
    avatar: 'default',
    dateFormat: "dd. MMM yyyy HH:mm 'Uhr'",
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
    payloadPagesPlugin({}),
    payloadCloudinaryPlugin({}),
    payloadSeoPlugin({
      // JHB plugin related config
      websiteContext: {
        topic: 'Software Developer for mobile, web-apps and websites',
      },
      documentContentTransformers: {
        pages: async (doc: PageType) => ({
          title: doc.title,
          subTitle: doc.hero.subtitle,
        }),
        projects: async (doc: ProjectType, lexicalToPlainText: any) => ({
          title: doc.title,
          excerpt: doc.excerpt,
          tags: doc.tags?.join(', '),
          body: (await lexicalToPlainText(doc.body)) ?? '',
        }),
      },

      // Payload official seo plugin config:
      collections: ['pages', 'projects'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }: { doc: any }) =>
        `${doc.title} - ${process.env.NEXT_PUBLIC_SITE_NAME}`,
      generateURL: ({ doc }: { doc: any }) => getPageUrl({ path: doc.path })!,
      interfaceName: 'SeoMetadata',
      fields: ({ defaultFields }: { defaultFields: any }) => [
        ...defaultFields.map((field: any) => {
          if ('name' in field) {
            if (field.name === 'title') {
              return {
                ...field,
                required: true,
                label: {
                  de: 'Titel',
                  en: 'Title',
                },
              }
            } else if (field.name === 'description') {
              return {
                ...field,
                required: true,
                label: {
                  de: 'Beschreibung',
                  en: 'Description',
                },
              }
            } else if (field.name === 'image') {
              return {
                ...field,
                label: {
                  de: 'Bild',
                  en: 'Image',
                },
              }
            }
          }

          return field
        }),
        alternatePathsField(),
      ],
    }),
  ],
})
