import type { CollectionConfig } from 'payload'

export const Color: CollectionConfig = {
  slug: 'color',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: "Название",
      required: true,
      localized: true,
    },
    {
      admin: {
        description: "Пример: #FFFFFF"
      },
      name: 'hex',
      type: 'text',
      label: "Код цвета",
      required: true,
      localized: true,
    },
  ],
  labels: {
    singular: {
      ru: 'Цвет'
    },
    plural: {
      ru: 'Цвета'
    }
  },
}
