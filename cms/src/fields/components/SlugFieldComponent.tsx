'use client'
import { formatSlug, liveFormatSlug } from '@/hooks/formatSlug'
import { useEffectExceptOnMount } from '@/hooks/utils/useEffectExceptOnMount'
import { TextInput, useField } from '@payloadcms/ui'
import { TextFieldClientComponent } from 'payload'

// TODO: find a way to pass the clientProps without a type error
// see https://payloadcms.com/docs/beta/admin/components#passing-props
// @ts-ignore
const SlugField: TextFieldClientComponent = ({ field, fallbackField }) => {
  const { value: fallbackValue } = useField<string>({ path: fallbackField })
  const { value: slug, setValue: setSlug } = useField<string>({ path: field._path })
  const { value: status } = useField({ path: '_status' })

  // only update the slug when editing the fallback field when the document is not published to avoid
  // the creation of a redirection due to the slug change
  const updateSlug = status === 'draft'

  // for draft documents, generate the slug based on the fallback value
  useEffectExceptOnMount(() => {
    // the onMount is skipped to avoid replacing the current slug without the user changing the fallback value

    if (updateSlug) {
      if (!fallbackValue) {
        setSlug(undefined)
      } else {
        setSlug(formatSlug(fallbackValue))
      }
    }
  }, [fallbackValue, setSlug])

  return (
    <TextInput
      path={field._path!}
      field={field}
      value={slug}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        // use liveFormatSlug here to format the slug correctly while typing
        setSlug(liveFormatSlug(e.target.value))
      }}
    />
  )
}

export default SlugField
