import { linkFields } from '@/fields/link'
import { GlobalConfig } from 'payload'

const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'links',
      label: 'Links',
      type: 'array',
      fields: linkFields({ relationTo: ['pages'] }),
    },
  ],
}

export default Header
