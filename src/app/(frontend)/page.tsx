import AboutSection from '@/components/pages/main/AboutSection'
import BannerCarousel from '@/components/pages/main/BannerCarousel'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const bannerImages = await payload.find({
    collection: 'media',
    pagination: false,
  })

  console.log(bannerImages)

  return (
    <div>
      <BannerCarousel />
      <AboutSection />
    </div>
  )
}
