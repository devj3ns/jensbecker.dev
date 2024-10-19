import { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  interfaceName: 'TestimonialsBlock',
  labels: {
    singular: {
      de: 'Testimonials Block',
      en: 'Testimonials Block',
    },
    plural: {
      de: 'Testimonials Blöcke',
      en: 'Testimonials Blocks',
    },
  },
  fields: [
    // unfortunately join fields are not supported inside blocks
    // -> the testimonials have to be fetched manually in the frontend
  ],
}
