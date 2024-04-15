'use client'

import React from 'react'
import Image from 'next/image'

const navLinks = [
  {
    title: "About us",
    path: "/about-us",
  },
  {
    title: "Events",
    path: "/events",
  },
  {
    title: "Resources",
    path: "/#resources",
  },
  {
    title: "Support",
    path: "/support",
  },
]

const Header = () => {
  return (
    <header>
      <nav className="fixed z-20 w-full bg-white/80 backdrop-blur pb-5 md:pb-0 shadow-xl shadow-gray-200/50">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="flex flex-col md:flex-row items-center justify-between lg:py-4">
            <div>
              <a href="/" aria-label="METRICS logo">
                <Image className="w-max h-14 py-4 lg:py-2" src="/images/logos/metrics_logo-full.png" alt={'METRICS logo'} width={640} height={112} />
              </a>
            </div>
            <div>
              <ul className="font-bold flex gap-10 md:gap-8 lg:gap-10 text-sm md:text-base">
                {navLinks.map((items, index) => (
                  <li key={index}>
                    <a className="hover:text-primary md:px-4" href={items.path}>
                      {items.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header