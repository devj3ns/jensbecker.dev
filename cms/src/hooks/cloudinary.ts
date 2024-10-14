import type { CollectionBeforeChangeHook, CollectionAfterDeleteHook, PayloadRequest } from 'payload'
import { v2 as cloudinary, UploadApiOptions, UploadApiResponse, UploadStream } from 'cloudinary'
import { Readable } from 'stream'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const cloudinaryFolder = process.env.CLOUDINARY_FOLDER

type File = NonNullable<PayloadRequest['file']>

const streamUpload = (file: File, id?: string): Promise<UploadApiResponse> => {
  const readStream = Readable.from(file.data)

  if (!cloudinaryFolder) {
    throw new Error('CLOUDINARY_FOLDER environment variable is not set')
  }

  return new Promise<UploadApiResponse>((resolve, reject) => {
    const options: UploadApiOptions = {
      // @ts-ignore
      folder: cloudinaryFolder as string,
      invalidate: true,
      resource_type: 'auto',
      // In case of updating the image, the public_id will be needed,
      // but not the folder as it's already in the URL and if we pass
      // the value then it will create file in sub-folder instead of updating.
      ...(id && { public_id: id, folder: null }),
    }

    const stream: UploadStream = cloudinary.uploader.upload_stream(options, (error, result) =>
      result ? resolve(result) : reject(error),
    )

    readStream.pipe(stream)
  })
}

const beforeChangeHook: CollectionBeforeChangeHook = async ({ data, req, operation }) => {
  if (operation === 'create') {
    if (req.file) {
      const result = await streamUpload(req.file, data.cloudinaryPublicId)

      return {
        ...data,
        cloudinaryPublicId: result.public_id,
        cloudinaryURL: result.secure_url,
      }
    } else {
      console.error('File not found')
      return data
    }
  }

  return data
}

const afterDeleteHook: CollectionAfterDeleteHook = async ({ doc }) => {
  await cloudinary.uploader.destroy(doc.cloudinaryPublicId, (error: any, result: any) => {
    console.error(result, error)
  })
  return doc
}

export { streamUpload, beforeChangeHook, afterDeleteHook }
