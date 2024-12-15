import type { CollectionConfig } from 'payload'

export const SubCategory: CollectionConfig = {
  slug: 'subcategory',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'category',
      type: 'relationship',
      relationTo: "category",
      label: 'Категория',
      required: true,
      localized: true,
    },
    {
      name: 'name',
      type: 'text',
      label: 'Название подкатегории',
      required: true,
      localized: true,
    },
  ],
  labels: {
    singular: {
      ru: 'Подкатегория'
    },
    plural: {
      ru: 'Подкатегории'
    }
  },
}
