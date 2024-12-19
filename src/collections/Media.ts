import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'alt'
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
    },
  ],
  labels: {
    singular: {
      ru: 'Медиа'
    },
    plural: {
      ru: 'Медиа'
    }
  },
  upload: {
    staticDir: 'public/media'
  },
}
