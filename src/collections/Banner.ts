import type { CollectionConfig } from 'payload'

export const Banner: CollectionConfig = {
  slug: 'banner',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'banner',
  },
  fields: [
    {
      name: 'banner',
      type: 'relationship',
      label: 'Баннер',
      relationTo: 'media',
      required: true,
      localized: true,
    },
  ],
  labels: {
    singular: {
      ru: 'Баннер'
    },
    plural: {
      ru: 'Баннеры'
    }
  },
}
