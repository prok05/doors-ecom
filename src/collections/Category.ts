import type { CollectionConfig } from 'payload'

export const Category: CollectionConfig = {
  slug: 'category',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Название категории',
      required: true,
      localized: true,
    },
  ],
  labels: {
    singular: {
      ru: 'Категория'
    },
    plural: {
      ru: 'Категории'
    }
  },
}
