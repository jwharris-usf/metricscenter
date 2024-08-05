'use client'

import React, { ReactNode } from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)

  return (
    <nav className='mx-auto px-4 sm:px-12 xl:px-0 xl:max-w-6xl pt-4 flex text-gray-700'>
      <div className='flex'>
        <Link href={'/'} className='mr-2'>Home</Link>
        <span>
          {pathNames.length > 0 && '>'}
        </span>
      </div>
      {
        pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`
          let itemClasses = paths === href ? 'mx-2 active' : 'mx-2'
          let itemLink = link[0].toUpperCase() + link.slice(1, link.length).replace(/-/g, " ")
          return (
            <ol className='flex' key={index}>
              <li className={itemClasses} key={index} >
                <Link href={href}>{itemLink}</Link>
              </li>
              <span>
                {pathNames.length !== index + 1 && '>'}
              </span>
            </ol>
          )
        })
      }
    </nav>
  )
}

export default Breadcrumbs;