import type { FieldHook } from 'payload'

const germanCharacterReplacements: Record<string, string> = {
  ä: 'ae',
  ö: 'oe',
  ü: 'ue',
  ß: 'ss',
}

export const formatSlug = (val: string): string =>
  val
    .toString() // Cast to string (optional)
    .toLowerCase() // Convert the string to lowercase letters
    .replace(/[äöüß]/g, (match) => germanCharacterReplacements[match])
    .normalize('NFKD') // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, '-') // Replace spaces with hyphen
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^\-+|\-+$/g, '') // Trim hyphens from start and end

const fallbackSlug =
  (fallback: string): FieldHook =>
  ({ operation, value, originalDoc, data }) => {
    const fallbackData = data?.[fallback] || originalDoc?.[fallback]

    // field has value, use formatted value
    if (typeof value === 'string' && value !== '') {
      return formatSlug(value)
    }

    // field has no value, use formatted fallback
    if (operation === 'create' || operation === 'update') {
      if (fallbackData && typeof fallbackData === 'string') {
        return formatSlug(fallbackData)
      }
    }

    return value
  }

export default fallbackSlug
