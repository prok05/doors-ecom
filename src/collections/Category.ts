import type { CollectionConfig } from 'payload'
import { slugify } from 'transliteration'

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
    {
      name: 'slug',
      type: 'text',
      unique: true,
    },
    {
      name: 'parentCategory',
      type: 'relationship',
      relationTo: 'category',
      label: 'Подкатегория',
      required: false
    }
  ],
  hooks: {
    beforeValidate: [
      ({ data, operation }) => {
        if (operation === 'create' && !data?.slug) {
          data.slug = slugify(data?.name || '', {
            lowercase: true,
            separator: '-',
          });
        }
      },
    ]
  },
  labels: {
    singular: {
      ru: 'Категория'
    },
    plural: {
      ru: 'Категории'
    }
  },
}
