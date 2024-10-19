import { CollectionConfig } from 'payload'

const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: {
      de: 'Testimonial',
      en: 'Testimonial',
    },
    plural: {
      de: 'Testimonials',
      en: 'Testimonials',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'project'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      // This title field is needed, because the nested author.name field cannot be used as a title field in payload.
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      admin: {
        components: {
          Field: '/fields/components/CopyAuthorNameToTitleField',
        },
      },
    },
    {
      name: 'author',
      type: 'group',
      label: {
        en: 'Author',
        de: 'Autor',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'company',
              type: 'text',
              required: true,
              localized: true,
              label: {
                en: 'Company',
                de: 'Firma',
              },
            },
            {
              name: 'companyUrl',
              type: 'text',
              label: {
                en: 'Company URL',
                de: 'Firma URL',
              },
              required: true,
              localized: true,

              // @ts-ignore
              validate: (value: string) => {
                const pattern = new RegExp(
                  '^(https?:\\/\\/)' + // protocol
                    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
                    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
                    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
                    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
                    '(\\#[-a-z\\d_]*)?$',
                  'i',
                )

                return !!pattern.test(value) ? true : 'Invalid URL'
              },
            },
          ],
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: {
            en: 'Image',
            de: 'Bild',
          },
        },
      ],
    },
    {
      name: 'project',
      type: 'relationship',
      relationTo: 'projects',
      admin: {
        position: 'sidebar',
      },
      required: true,
      label: {
        en: 'Project',
        de: 'Projekt',
      },
    },
    {
      name: 'text',
      type: 'textarea',
      required: true,
      localized: true,
    },
  ],
}

export default Testimonials
