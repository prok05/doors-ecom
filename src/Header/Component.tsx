import { HeaderClient } from './Component.client'
import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'


export async function Header() {
  const payload = await getPayload({ config: configPromise })

  const categories = await payload.find({
    collection: 'category',
    pagination: false,
    select: {
      name: true,
    }
  })

  const subcategories = await payload.find({
    collection: 'subcategory',
    pagination: false,
    select: {
      name: true,
      category: true,
    }
  })

  console.log(categories.docs)
  console.log(subcategories)

  return <HeaderClient categories={categories.docs} subcategories={subcategories.docs} />
}
