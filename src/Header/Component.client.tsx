'use client'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import logo from '@/../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
// import Typography from '@mui/material/Typography'
import MenuIcon from "@mui/icons-material/Menu";
import { Typography, IconButton, Drawer, Box } from "@mui/material";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { Category } from '@/payload-types'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import Divider from '@mui/material/Divider';

export type Props = {
  categories: Category[]
  subcategories: { category: Category; id: number; name: string }[]
}

export const HeaderClient: React.FC<Props> = (props) => {
  const { categories } = props
  const { subcategories } = props

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const toggleCategory = (categoryId: number) => {
    setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
  };

  return (
    // <header className="bg-white py-6 px-8 flex flex-col">
    //   <div className="flex items-center justify-end mb-4">
    //     <nav className="mr-6">
    //       <Link className="mr-3 text-gray-800 hover:text-primary" href="/about">
    //         О компании
    //       </Link>
    //       <Link className="mr-3 text-gray-800 hover:text-primary" href="/contacts">
    //         Доставка
    //       </Link>
    //       <Link className="text-gray-800 hover:text-primary" href="/about">
    //         Контакты
    //       </Link>
    //     </nav>
    //     <div>
    //       <Typography variant="h6" fontWeight="bold">
    //         8 (999) 999-99-99
    //       </Typography>
    //     </div>
    //   </div>
    //
    //   <div className="flex items-center mx-auto">
    //     <div className="mr-10">
    //       <Link href="/">
    //         <Image alt="Логотип" height="80" src={logo} />
    //       </Link>
    //     </div>
    //     <div className="bg-stone-100 rounded-2xl">
    //       <NavigationMenu>
    //         <NavigationMenuList>
    //           {categories?.map((category) => {
    //             return (
    //               <NavigationMenuItem key={category.id}>
    //                 <NavigationMenuTrigger className="px-8 py-8 hover:bg-white bg-stone-100 outline-none">
    //                   <Typography fontWeight="bold" variant="subtitle1">
    //                     {category.name}
    //                   </Typography>
    //                 </NavigationMenuTrigger>
    //                 <NavigationMenuContent className="flex items-center">
    //                   <ul className="min-w-[400px]">
    //                     {subcategories
    //                       ?.filter((sc) => sc.category.id === category.id)
    //                       .map((sc) => {
    //                         return (
    //                           <li className="p-4 hover:bg-gray-100 cursor-pointer" key={sc.id}>
    //                             <NavigationMenuLink>{sc.name}</NavigationMenuLink>
    //                           </li>
    //                         )
    //                       })}
    //                   </ul>
    //                 </NavigationMenuContent>
    //               </NavigationMenuItem>
    //             )
    //           })}
    //         </NavigationMenuList>
    //       </NavigationMenu>
    //     </div>
    //     <div className="ml-10">
    //       <Link href="/cart">
    //         <ShoppingCartOutlinedIcon fontSize="large" />
    //       </Link>
    //     </div>
    //   </div>
    // </header>
    <header className="bg-white md:py-6 md:px-8">
      {/* Desktop Header */}
      <div className="hidden md:flex flex-col">
        {/* Top navigation */}
        <div className="flex items-center justify-end mb-4">
          <nav className="mr-6">
            <Link className="mr-3 text-gray-800 hover:text-primary" href="/about">
              О компании
            </Link>
            <Link className="mr-3 text-gray-800 hover:text-primary" href="/contacts">
              Доставка
            </Link>
            <Link className="text-gray-800 hover:text-primary" href="/contacts">
              Контакты
            </Link>
          </nav>
          <div>
            <Typography variant="h6" fontWeight="bold">
              8 (999) 999-99-99
            </Typography>
          </div>
        </div>

        {/* Categories */}
        <div className="flex items-center mx-auto">
          <div className="mr-10">
            <Link href="/">
              <Image alt="Логотип" height="80" src={logo} />
            </Link>
          </div>
          <div className="bg-stone-100 rounded-2xl">
            <NavigationMenu>
              <NavigationMenuList>
                {categories?.map((category) => (
                  <NavigationMenuItem key={category.id} className="relative">
                    <NavigationMenuTrigger className="px-8 py-8 hover:bg-white bg-stone-100 outline-none">
                      <Typography fontWeight="bold" variant="subtitle1">
                        {category.name}
                      </Typography>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute left-0 w-full bg-white shadow-lg border-t border-gray-200">
                      <ul className="min-w-[400px]">
                        {subcategories
                          ?.filter((sc) => sc.category.id === category.id)
                          .map((sc) => (
                            <li className="p-4 hover:bg-gray-100 cursor-pointer" key={sc.id}>
                              <NavigationMenuLink>{sc.name}</NavigationMenuLink>
                            </li>
                          ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="ml-10">
            <Link href="/cart">
              <ShoppingCartOutlinedIcon fontSize="large" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex items-center p-2 justify-between md:hidden bg-stone-100">
        <Link href="/">
          <Image alt="Логотип" height={80} src={logo} />
        </Link>
        <IconButton onClick={toggleDrawer(true)} color="inherit">
          <MenuIcon />
        </IconButton>
      </div>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          {/* Mobile menu content */}
          <div className="p-4">
            <Link href="/">
              <Typography variant="h6">
                Главная
              </Typography>
            </Link>
            {/* Categories */}
            <Typography variant="h6">
              Категории
            </Typography>
            <Divider />
            <ul className="mt-2">
              {categories?.map((category) => (
                <li key={category.id} className="mb-2">
                  <Typography variant="subtitle1" fontWeight="bold">
                    {category.name}
                  </Typography>
                  <ul className="ml-4">
                    {subcategories
                      ?.filter((sc) => sc.category.id === category.id)
                      .map((sc) => (
                        <li key={sc.id} className="text-gray-700 hover:text-primary mt-2">
                          <Link href={`/subcategory/${sc.id}`}>{sc.name}</Link>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ul>

            {/* Links */}
            <Typography variant="h6" className="mt-6">
              Ссылки
            </Typography>
            <Divider />
            <ul className="mt-2">
              <li className="mb-2">
                <Link href="/about">О компании</Link>
              </li>
              <li className="mb-2">
                <Link href="/contacts">Доставка</Link>
              </li>
              <li>
                <Link href="/contacts">Контакты</Link>
              </li>
              <li className="mt-2">
                <Typography variant="h6" fontWeight="bold">
                  8 (999) 999-99-99
                </Typography>
              </li>
            </ul>
          </div>
        </Box>
      </Drawer>
    </header>
  )
}
