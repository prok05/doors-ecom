import React from 'react'
import './globals.css'
import { Header } from '@/Header/Component'
import { Footer } from '@/Footer/Component'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['cyrillic', 'latin'] })

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={montserrat.className} lang="ru">
      <head>
        {/*<link href="/favicon.ico" rel="icon" sizes="32x32" />*/}
        {/*<link href="/favicon.svg" rel="icon" type="image/svg+xml" />*/}
      </head>
      <body className="bg-stone-100">
        <div className="container flex flex-col min-h-screen mx-auto bg-white">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
