'use client'

import React from 'react'
import { FiChevronRight } from "react-icons/fi";

const Alert = ({alert}:any) => {
  return (
    <section className="mt-4">
      <div className="bg-green-50 w-full font-medium text-green-700 ring-1 ring-inset ring-green-600/20 relative">
        <div className="absolute inset-y-0 w-3 bg-green-700"></div>
        <div className="mx-auto xl:max-w-6xl px-4 sm:px-12 xl:px-0">
          <span className="inline-flex items-center py-8">{alert.content}
            <a href="/events/event" className="pl-2 font-bold text-nowrap">Learn more</a>&#160;<FiChevronRight />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Alert