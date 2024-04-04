'use client'

import React from 'react'
import { BsPlayCircle } from "react-icons/bs";

const ResourceCard = ({resourceCard}:any) => {
  const imageUrl = resourceCard.thumbnail.data.attributes.url;

  const dateOptions:any = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const date = new Date(resourceCard.date).toLocaleDateString("en-US", dateOptions);
  return (
    <div className="rounded-lg border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 sm:p-12 grow">
      <div>
        <div className="border border-gray-200">
          <a href={resourceCard.url} className="relative flex items-center">
            <img src={imageUrl} className="opacity-25 object-cover h-[125px]" height="100%" width="100%" alt={resourceCard.name} />
            <BsPlayCircle className="h-14 w-full text-brand-blue absolute" />
          </a>
        </div>

        <div className="pt-4 space-y-6">
          <p className="text-gray-400 text-sm">{date}</p>
          <p className="text-xl">
            <a href={resourceCard.url}>{resourceCard.name}</a>
          </p>
          <p>
            <a href={resourceCard.url} className="text-sm btn-brand-blue text-white hover:opacity-90 transform transition flex w-max duration-500 hover:scale-105 font-medium rounded-lg px-4 py-2">
              Watch
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResourceCard