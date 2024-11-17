import OpenAI from 'openai'
import { generateText } from './generateText'
import { GenerateDescription } from '@payloadcms/plugin-seo/types'
import { CollectionConfig } from 'payload'
import { Page, Project } from '@/payload-types'
import { lexicalToPlainText } from '../lexicalToPlainText'

/** A transformer that picks and transforms the relevant fields from a document. */
type CollectionDocTransformer = (doc: any) => Promise<Record<string, any>>

/** Transforms the content of a document. */
const transformDocContent = (doc: any, collection: string) => {
  const collectionTransformers: Record<string, CollectionDocTransformer> = {
    pages: async (doc: Page) => {
      return {
        title: doc.title,
        hero: doc.hero,
        sections: doc.sections,
      }
    },
    projects: async (doc: Project) => {
      return {
        title: doc.title,
        excerpt: doc.excerpt,
        body: await lexicalToPlainText(doc.body),
      }
    },
  }

  const transformer = collectionTransformers[collection]

  if (!transformer) {
    throw new Error(`No transformer found for collection ${collection}`)
  }

  return transformer(doc)
}

export const generateDescription: GenerateDescription = async ({
  doc,
  collectionConfig,
  locale,
}: {
  doc: any
  collectionConfig?: CollectionConfig | undefined
  locale?: string | undefined
}) => {
  if (!doc || !collectionConfig || !locale) {
    throw new Error('No doc or collectionConfig or locale provided')
  }

  const content = await transformDocContent(doc, collectionConfig.slug)
  const stringifiedContent = JSON.stringify(content)

  if (!content || stringifiedContent.length === 0) {
    throw new Error('No content provided')
  }

  const body: OpenAI.Chat.ChatCompletionCreateParams = {
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content:
          `Create an SEO-optimized meta description for a page of the type "${collectionConfig.slug}" for the website of a Software Developer. ` +
          `The document's content will be provided as JSON. Write a concise summary of the document's content, ensuring it is clear and engaging. ` +
          `Respect a character limit of 120 characters and return the result in the language specified by the ISO-2 code: "${locale}".`,
      },
      {
        role: 'user',
        content: stringifiedContent,
      },
    ],
    max_completion_tokens: 50,
  }

  const result = await generateText(body)

  return result
}
