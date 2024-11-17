import payloadConfig from '@/payload.config'
import {
  HTMLConverterFeature,
  consolidateHTMLConverters,
  convertLexicalToHTML,
  defaultEditorFeatures,
  sanitizeServerEditorConfig,
} from '@payloadcms/richtext-lexical'

import { defaultEditorConfig } from '@payloadcms/richtext-lexical'
import { convert } from 'html-to-text'

/** Converts the data from a lexical field to plain text */
export async function lexicalToPlainText(data: any): Promise<string | undefined> {
  // TODO: try to use the lexical headless editor to convert to plaintext directly
  // see https://payloadcms.com/docs/rich-text/lexical#lexical-plain-text
  //
  // What I tried so far:
  //
  // const headlessEditor = createHeadlessEditor({})

  // headlessEditor.setEditorState(headlessEditor.parseEditorState(excerptRaw))

  // const plainTextContent = headlessEditor.getEditorState().read(() => {
  //   return $getRoot().getTextContent()
  // })

  const editorConfig = {
    ...defaultEditorConfig,
    features: [...defaultEditorFeatures, HTMLConverterFeature({})],
  }

  const sanitizedServerEditorConfig = await sanitizeServerEditorConfig(
    editorConfig,
    await payloadConfig,
  )

  const html = await convertLexicalToHTML({
    converters: consolidateHTMLConverters({ editorConfig: sanitizedServerEditorConfig }),
    data: data,
  })

  const text = await htmlToPlainText(html)

  // Returning undefined if the text is empty, so that the ?? operator can be used for the output
  return text ? text : undefined
}

async function htmlToPlainText(html: string) {
  return convert(html, {
    selectors: [
      {
        selector: 'a',
        options: {
          ignoreHref: true,
        },
      },
    ],
    wordwrap: null,
  })
}
