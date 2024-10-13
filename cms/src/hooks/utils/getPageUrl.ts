/** Returns the full URL to the frontend page of the CMS collection document with the given path. */
export function getPageUrl({ path, preview = false }: { path: string; preview?: boolean }): string {
  const domain = process.env.PAYLOAD_PUBLIC_FRONTEND_URL

  if (!path) {
    throw new Error('Path is required. Given path: ' + path)
  }

  const url = `${domain}${preview ? '/preview' : ''}${path}`

  return url
}
