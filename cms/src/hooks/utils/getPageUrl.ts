/** Returns the full URL to the frontend page of the CMS collection document with the given path. */
export function getPageUrl({
  path,
  preview = false,
}: {
  path: string
  preview?: boolean
}): string | undefined {
  const domain = process.env.PAYLOAD_PUBLIC_FRONTEND_URL

  if (!path) {
    console.error('Path is required. Given path: ' + path)
    return undefined
  }

  const url = `${domain}${preview ? '/preview' : ''}${path}`

  return url
}
