'use client'

import React from 'react'
import { BsPlayBtnFill } from "react-icons/bs";
import useScript from '@/hooks/useScript';
import { Button } from './Button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
              <p className="text-lg font-semibold">
                <span>{resourceCard.name}</span>
              </p>
              <div className="flex flex-col sm:flex-row justify-between">
                {/* { resourceCard.name === 'Retention of School Mental Health Professionals' && (
                  <a href="/images/METRICS-Webinar-Retention-April-2024.pptx" target="_blank" className="mb-4 sm:mb-0">
                    <Button variant="outline">Download slides</Button>
                  </a>
                )} */}
                { resourceCard.name === 'Professional Learning Communities Kickoff Webinar' && (
                  <a href="/images/PLC-Kickoff-2024-slides.pdf" target="_blank" className="mb-4 sm:mb-0">
                    <Button variant="outline">Download slides</Button>
                  </a>
                )}
                { resourceCard.name === 'MHSP Grant Program - Year 2 Interim Performance Reporting' && (
                  <a href="/images/FINAL-MHSP-Year-2-IPR-combined-8-29-v2.pptx" target="_blank" className="mb-4 sm:mb-0">
                    <Button variant="outline">Download slides</Button>
                  </a>
                )}
                { resourceCard.name === 'SBMH Grant Program - Year 2 Interim Performance Reporting' && (
                  <a href="/images/FINAL-Year2-SBMH-APR-Webinar-09052024-v2.pptx" target="_blank" className="mb-4 sm:mb-0">
                    <Button variant="outline">Download slides</Button>
                  </a>
                )}
                { resourceCard.name === 'FY24 Grantee Year 1 APR Webinar' && (
                  <a href="/images/FY24_APR_Webinar_July 2025_FINAL.pptx" target="_blank" className="mb-4 sm:mb-0">
                    <Button variant="outline">Download slides</Button>
                  </a>
                )}
                <span className="text-sm btn-brand-blue text-white hover:opacity-90 transform transition flex w-max duration-500 hover:scale-105 font-medium rounded-lg px-4 py-2">
                  Watch
                </span>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-3xl">{resourceCard.name}</DialogTitle>
          <DialogDescription className="py-4">
            <iframe src={resourceCard.url} allow="autoplay; fullscreen; picture-in-picture" className="w-[70vw] h-[70vh]" title={resourceCard.name} data-ready="true"></iframe>
          </DialogDescription>
        </DialogHeader>
        {/* { resourceCard.name === 'Retention of School Mental Health Professionals' && (
          <DialogFooter className='sm:justify-start border-t pt-6'>
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
          </DialogFooter>
        )} */}
        { resourceCard.name === 'Professional Learning Communities Kickoff Webinar' && (
          <DialogFooter className='sm:justify-start border-t pt-6'>
            <div className='text-base pb-2'>
              Download the slides from this webinar:
              <a href="/images/PLC-Kickoff-2024-slides.pdf" target="_blank">
                <Button variant="outline" className='mx-4'>PDF</Button>
              </a>
            </div>
          </DialogFooter>
        )}
        { resourceCard.name === 'MHSP Grant Program - Year 2 Interim Performance Reporting' && (
          <DialogFooter className='sm:justify-start border-t pt-6'>
            <div className='text-base pb-2'>
              Download the slides from this webinar:
              <a href="/images/FINAL-MHSP-Year-2-IPR-combined-8-29-v2.pptx" target="_blank">
                <Button variant="outline" className='mx-4'>PPT</Button>
              </a>
            </div>
          </DialogFooter>
        )}
        { resourceCard.name === 'SBMH Grant Program - Year 2 Interim Performance Reporting' && (
          <DialogFooter className='sm:justify-start border-t pt-6'>
            <div className='text-base pb-2'>
              Download the slides from this webinar:
              <a href="/images/FINAL-Year2-SBMH-APR-Webinar-09052024-v2.pptx" target="_blank">
                <Button variant="outline" className='mx-4'>PPT</Button>
              </a>
            </div>
          </DialogFooter>
        )}
        { resourceCard.name === 'FY24 Grantee Year 1 APR Webinar' && (
          <DialogFooter className='sm:justify-start border-t pt-6'>
            <div className='text-base pb-2'>
              Download the slides from this webinar:
              <a href="/images/FY24_APR_Webinar_July 2025_FINAL.pptx" target="_blank">
                <Button variant="outline" className='mx-4'>PPT</Button>
              </a>
            </div>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default ResourceCard