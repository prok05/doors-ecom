import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { Media } from '@/payload-types'

export type Props = {
  media: Media[]
}

export const BannerCarousel: React.FC<Props> = (props) => {
  const {media} = props;

  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {media?.map((m) => (
          <CarouselItem key={m.id}>
            <div className="p-1">
              {/*<Card>*/}
              {/*  <CardContent className="flex aspect-square items-center justify-center p-6">*/}
              {/*    <span className="text-4xl font-semibold">{index + 1}</span>*/}
              {/*  </CardContent>*/}
              {/*</Card>*/}
              <Image src={`@/../media/${m.filename}`} alt={m?.alt}/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default BannerCarousel