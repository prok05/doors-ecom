import type { CollectionConfig } from 'payload'

export const Product: CollectionConfig = {
  slug: 'product',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'subcategory',
      label: 'Подкатегория',
      type: 'relationship',
      relationTo: 'subcategory',
      required: true,
    },
    {
      name: 'name',
      label: 'Название',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Описание',
      type: 'textarea',
      required: true,
    },
    {
      name: 'color',
      label: 'Цвета',
      type: 'relationship',
      relationTo: 'color',
      required: true,
    },
    {
      name: 'sizes',
      label: 'Размеры и цены',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'size',
          type: 'text',
          label: 'Размер',
          required: true
        },
        {
          name: 'price',
          type: 'text',
          label: 'Цена',
          required: true
        },
      ],
    },
    {
      name: 'direction',
      label: 'Направление открывания',
      type: 'select',
      options: [
        { value: 'left', label: 'Левое' },
        { value: 'right', label: 'Правое' },
      ],
      required: true,
      hasMany: true,
    },
  ],
  upload: true,
  labels: {
    singular: {
      ru: 'Товар',
    },
    plural: {
      ru: 'Товары',
    },
  },
}