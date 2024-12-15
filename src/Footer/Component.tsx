import Link from 'next/link'
import React from 'react'


export async function Footer() {
  return (
    <footer className="bg-gray-500 text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <nav className="flex flex-col md:flex-row gap-4">
            {/*{navItems.map(({ link }, i) => {*/}
            {/*  return <CMSLink className="text-white" key={i} {...link} />*/}
            {/*})}*/}
          </nav>
        </div>
      </div>
    </footer>
  )
}
