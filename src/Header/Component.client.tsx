'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import logo from '@/../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import Typography from '@mui/material/Typography';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Category } from '@/payload-types'

export type Props = {
  categories: Category[]
  subcategories: {category: Category, id: number, name: string}[]
}

export const HeaderClient: React.FC<Props> = (props) => {
  const { categories } = props;
  const { subcategories } = props;

  return (
    <header className="bg-white py-6 px-8 flex flex-col">
      <div className="flex items-center justify-end mb-4">
        <nav className="mr-6">
          <Link className="mr-3 text-gray-800 hover:text-primary" href="/about">
            О компании
          </Link>
          <Link className="mr-3 text-gray-800 hover:text-primary" href="/contacts">
            Доставка
          </Link>
          <Link className="text-gray-800 hover:text-primary" href="/about">
            Контакты
          </Link>
        </nav>
        <div>
          <Typography variant="h6" fontWeight="bold">
            8 (999) 999-99-99
          </Typography>
        </div>
      </div>

      <div className="flex items-center mx-auto">
        <div className="mr-10">
          <Image alt="Логотип" height="80" src={logo} />
        </div>
        <div className="bg-stone-100 rounded-2xl">
          <NavigationMenu>

            <NavigationMenuList>
              {categories?.map((category) => {
                return (
                  <NavigationMenuItem key={category.id}>
                    <NavigationMenuTrigger className="px-8 py-8 hover:bg-white bg-stone-100 outline-none">
                      <Typography fontWeight="bold" variant="subtitle1">
                        {category.name}
                      </Typography>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex items-center">
                      <ul className="min-w-[400px]">
                        {subcategories
                          ?.filter(sc => sc.category.id === category.id)
                          .map((sc) => {
                          return <li
                            className="p-4 hover:bg-gray-100 cursor-pointer"
                            key={sc.id}>
                            <NavigationMenuLink>{sc.name}</NavigationMenuLink>
                          </li>
                        })}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="ml-10">Корзина</div>
      </div>
    </header>
  )
}
