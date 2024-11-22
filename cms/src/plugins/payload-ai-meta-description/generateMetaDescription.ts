import OpenAI from 'openai'
import { generateOpenAIChatCompletion } from './utils/generateOpenAIChatCompletion'
import { WebsiteContext } from './types/WebsiteContext'
import { PageContext } from './types/PageContext'

export const generateMetaDescription = async ({
  pageContext,
  websiteContext,
  content,
  locale,
  openAIKey,
}: {
  pageContext: PageContext
  content: string
  locale: string
  websiteContext: WebsiteContext
  openAIKey: string
}): Promise<string> => {
  const lengthLimit = 150

  const body: OpenAI.Chat.ChatCompletionCreateParams = {
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `
        Du bist ein SEO-Experte. Erstelle eine SEO-optimierte Meta-Beschreibung unter Berücksichtigung der folgenden Informationen:
  
        **Website Context**: 
        - Website Topic: ${websiteContext.topic}
        
        **Page Context**:
        - Page Title: ${pageContext.title}
        - Page Type: ${pageContext.type}
        - Page Keywords: ${pageContext.keywords?.join(', ')}
        
        **Richtlinien**:
        
        - Schreibe eine prägnante und ansprechende Zusammenfassung des Seiteninhalts.
        - Die Beschreibung soll den Nutzer anregen, die Seite zu besuchen.
        - Integriere den Seitentitle wenn möglich am Anfang der Beschreibung.
        - Integriere die Keywords natürlich in den Text.
        - Behalte einen professionellen und informativen Ton bei. Verwende eine neutrale Sprache.
        - Vermeide direkte Ansprachen wie "Entdecken Sie" oder "Erfahren Sie".
        - Halte die Länge auf maximal ${lengthLimit} Zeichen.
        - Schreibe in der Sprache, die durch den ISO-2-Code "${locale}" angegeben ist.
        
        Der Seiteninhalt wird im nächsten Schritt bereitgestellt.`,
      },
      {
        role: 'user',
        content: content,
      },
    ],
    max_completion_tokens: 100,
  }

  const result = await generateOpenAIChatCompletion(body, openAIKey)

  if (!result) {
    throw new Error('No description generated')
  }

  // Remove any quotes that OpenAI might have added around the description
  return result.trim().replace(/^["']|["']$/g, '')
}
