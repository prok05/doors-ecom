import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { Banner } from '@/payload-types'

export type Props = {
  banners: Banner[]
}

export const BannerCarousel: React.FC<Props> = (props) => {
  const { banners } = props

  return (
    <Carousel
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {banners.map((banner) => {
          const media = typeof banner.banner === "object" ? banner.banner : null;

          return (
            <CarouselItem key={banner.id}>
              <div>
                {media ? (
                  <Image
                    src={process.env.NEXT_PUBLIC_SERVER_URL + media.url}
                    alt={media.alt || "Banner"}
                    width={media.width || 500}
                    height={media.height || 300}
                  />
                ) : (
                  <span>Не удалось загрузить баннер</span>
                )}
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden" />
      <CarouselNext className="hidden" />
    </Carousel>
  )
}

export default BannerCarousel
