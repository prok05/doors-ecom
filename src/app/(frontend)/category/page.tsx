import AboutSection from '@/components/pages/main/AboutSection'
import BannerCarousel from '@/components/pages/main/BannerCarousel'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const categories = await payload.find({
    collection: 'category',
    pagination: false,
  })

  return (
    <div>
      <h2>Категории</h2>
      {categories.docs.filter((category) => !category.parentCategory).map((filteredCategory) => {
        return <li key={filteredCategory.id}>{filteredCategory.name}</li>
      })}
    </div>
  )
}
