'use client'

import React from 'react'
import { BsPlayBtnFill } from "react-icons/bs";
import useScript from '@/hooks/useScript';
import { Button } from './Button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./Dialog"

const ResourceCard = ({ resourceCard }: any) => {
  const imageUrl = resourceCard.thumbnail.data.attributes.url;

  const dateOptions: any = {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  };
  const date = new Date(resourceCard.date).toLocaleDateString("en-US", dateOptions);

  useScript('https://player.vimeo.com/api/player.js');

  return (
    <Dialog>
      <DialogTrigger className='grow'>
        <div className="rounded-lg border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 sm:p-12 grow h-full text-left">
          <div>
            <div className="border border-gray-200 bg-gray-500 hover:bg-gray-200 transition duration-500">
              <span className="relative flex items-center">
                <img src={imageUrl} className="opacity-50 object-cover h-[125px]" height="100%" width="100%" alt={resourceCard.name} />
                <BsPlayBtnFill className="h-14 w-full text-brand-blue absolute" />
              </span>
            </div>

            <div className="pt-4 space-y-6">
              <p className="text-gray-400 text-sm">{date}</p>
              <p className="text-xl">
                <span>{resourceCard.name}</span>
              </p>
              <p>
                <span className="text-sm btn-brand-blue text-white hover:opacity-90 transform transition flex w-max duration-500 hover:scale-105 font-medium rounded-lg px-4 py-2">
                  Watch
                </span>
              </p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{resourceCard.name}</DialogTitle>
          <DialogDescription>
            <div>
              <iframe src={resourceCard.url} allow="autoplay; fullscreen; picture-in-picture" className="w-[70vw] h-[70vh]" title={resourceCard.name} data-ready="true"></iframe>
            </div>
            { resourceCard.name === 'Retention of School Mental Health Professionals' && (
              <div className='text-base pb-2'>
                Download the slides from this webinar:
                <a href="/images/METRICS-Webinar-Retention-April-2024.pptx" target="_blank">
                  <Button variant="outline" className='mx-4'>PPT</Button>
                </a>
                or
                <a href="/images/METRICS-Webinar-Retention-April-2024.pdf" target="_blank">
                  <Button variant="outline" className='mx-4'>PDF</Button>
                </a>
              </div>
            )}

          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ResourceCard