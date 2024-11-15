/** Returns the full URL to the frontend page of the CMS collection document with the given path. */
export function getFrontendUrl({
  path,
  preview = false,
}: {
  path: string
  preview?: boolean
}): string {
  const domain = process.env.PAYLOAD_PUBLIC_FRONTEND_URL

  const url = `${domain}${preview ? '/preview' : ''}${path}`

  return url
}
