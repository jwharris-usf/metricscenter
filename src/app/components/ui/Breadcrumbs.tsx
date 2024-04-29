'use client'

import React, { ReactNode } from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = () => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)

  return (
    <div className='mx-auto px-4 sm:px-12 xl:px-0 xl:max-w-6xl pt-4'>
      <ul className='flex text-gray-700'>
        <li className='mr-2' key='home'>
          <Link href={'/'}>Home</Link>
        </li>
        <span>
          {pathNames.length > 0 && '>'}
        </span>
        {
          pathNames.map((link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join('/')}`
            let itemClasses = paths === href ? 'mx-2 active' : 'mx-2'
            let itemLink = link[0].toUpperCase() + link.slice(1, link.length).replace(/-/g, " ")
            return (
              <>
                <li className={itemClasses} key={index} >
                  <Link href={href}>{itemLink}</Link>
                </li>
                <span>
                  {pathNames.length !== index + 1 && '>'}
                </span>
              </>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Breadcrumbs;