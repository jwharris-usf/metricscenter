'use client'

import React from 'react'

const BioCard = ({bioCard}:any) => {
  const imageUrl = "http://127.0.0.1:1337" + bioCard.photo.data.attributes.url;
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-8 py-12 shadow-xl shadow-gray-300/75 sm:p-12 mt-20">
      <div className="-mt-[6.2em]">
        <img src={imageUrl} className="mx-auto rounded-full" width="100" height="100" alt={bioCard.name} />
        <div className="space-y-6">
          <div className="text-sm mt-6">
            <a href={bioCard.url} className="font-bold text-lg">
              {bioCard.name}
            </a>
            <p className="italic">
              {bioCard.title}
            </p>
            <p className="mt-2">
              {bioCard.location}
            </p>
          </div>
          <p className="pt-2">
            <a href={bioCard.url} className="text-sm btn-brand-blue text-white hover:opacity-90 transform transition flex w-max duration-500 hover:scale-105 font-medium rounded-lg px-4 py-2">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default BioCard