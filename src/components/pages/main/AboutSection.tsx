import React from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image'
import checkListIcon from '@/../public/icons/checklist-icon.svg'
import checkIcon from '@/../public/icons/check-icon.svg'
import deliveryIcon from '@/../public/icons/delivery-icon.svg'

function AboutSection() {
  return (
    <section className="py-12 px-6 md:px-12 relative border-2 border-stone-200 rounded-2xl mt-6">
      <div className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-white px-4">
        <h5 className="uppercase text-nowrap font-bold text-lg">Интернет-магазин дверей</h5>
      </div>
      <Typography
        sx={{
          textTransform: 'uppercase',
          marginBottom: 3,
        }}
      >
        Двери с доставкой по всей России
      </Typography>
      <Typography sx={{
        marginBottom: 5,
      }}>
        Розница фабрики «ДВЕРЬБЕРИНК» представлена интернет-магазином и фирменными салонами в
        Белгороде. Мы осуществляем доставку по всей территории Белгородской области. В городах
        присутствия доставка возможна на следующий день.
      </Typography>

      <div className="bg-stone-200 flex flex-col justify-center md:flex-row md:justify-evenly py-8 md:py-14 px-8 rounded-2xl">
        <div className="flex items-center mb-6 md:mb-0 md:mr-4">
          <div className="mr-4 md:mr-6 shrink-0">
            <Image className="object-contain" src={checkListIcon} height={64} width={64} alt="Ассортимент" />
          </div>
          <div>
            <Typography
              sx={{
                textTransform: 'uppercase',
              }}
              variant={'h6'}
            >
              Ассортимент
            </Typography>
            <Typography variant={'body2'}>Большой выбор моделей дверей</Typography>
          </div>
        </div>

        <div className="flex items-center mb-6 md:mb-0 md:mr-4">
          <div className="mr-4 md:mr-6 shrink-0">
            <Image className="object-contain" src={checkIcon} height={64} width={64} alt="Ассортимент" />
          </div>
          <div>
            <Typography
              sx={{
                textTransform: 'uppercase',
              }}
              variant={'h6'}
            >
              В наличии
            </Typography>
            <Typography variant={'body2'}>В наличии на складе 95% товаров каталога</Typography>
          </div>
        </div>

        <div className="flex items-center mb-6 md:mb-0">
          <div className="mr-4 md:mr-6 shrink-0">
            <Image className="object-contain" src={deliveryIcon} height={64} width={64} alt="Ассортимент" />
          </div>
          <div>
            <Typography
              sx={{
                textTransform: 'uppercase',
              }}
              variant={'h6'}
            >
              Доставка
            </Typography>
            <Typography variant={'body2'}>Доставка на следующий день. Самовывоз.</Typography>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
