'use client'

import { FC } from 'react'
import Breadcrumbs from './Breadcrumbs'

interface HeroProps {
  type: string
  title: string
  subTitle?: string
}

const Hero: FC<HeroProps> = ({ type, title, subTitle }) => {
  return (
    <section>
      {type == "Primary" ? (
        <div className='border-b border-blue-100 bg-blue-100/25 bg-gradient-to-br from-white to-blue-200/50'>
          <div className="mx-auto px-4 sm:px-12 lg:px-40 xl:px-0 xl:max-w-6xl pt-[150px] md:pt-[200px] pb-[70px] md:pb-[100px]">
            <div className="text-center max-w-[700px] mx-auto">
              <h1 className="font-black text-5xl md:text-7xl">
                {title}
              </h1>
              <p className="mt-5 md:mt-10 md:text-lg">{subTitle}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-gray-100">
          <div className="mx-auto px-4 sm:px-12 lg:px-40 xl:px-0 xl:max-w-6xl pt-[150px] md:pt-[155px] pb-[50px] md:pb-[80px]">
              <h1 className="font-black text-5xl md:text-7xl">
                {title}
              </h1>
            </div>
          </div>
          
          <Breadcrumbs />
        </div>
      )}
    </section>
  )
}

export default Hero