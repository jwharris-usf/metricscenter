'use client'

import React from 'react'
import { Button } from './Button';
import { BsPlayBtnFill } from 'react-icons/bs';
import { RxOpenInNewWindow } from "react-icons/rx";
import { sendGAEvent } from '@next/third-parties/google'

const FeaturedResourceCard = () => {

  const handleClick = (url:string, GAEvent:string, GAValue:string) => {
    console.log(url);
    console.log(GAEvent);
    console.log(GAValue);
    window.open(url, '_blank', 'noopener,noreferrer')
    if (GAEvent) {
      sendGAEvent('event', GAEvent, { value: GAValue })
    }
  }

  return (
    <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
      <div className="text-gray-600">
        <div className="rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/25">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 lg:w-1/3 p-2">
              <div className="overflow-hidden border rounded-xl md:h-full">
                <a href="https://youtu.be/yO2MT3-kLYY?si=loWtxkfewlpmbdC4" target="_blank" onClick={() => sendGAEvent('event', 'linkClicked', { value: 'Reimagining MTSS: A Pathway to Whole School Well-Being' })}>
                  <img className="mx-auto w-full h-[18em] md:h-full rounded-xl object-cover object-center hover:scale-110 duration-500" src="images/MTSS-Podcast.png" alt="Reimagining MTSS: A Pathway to Whole School Well-Being" loading="lazy" width="" height=""/>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 lg:w-2/3">
              <div className="">
                <div className="p-2">
                  <h2 className="text-2xl font-semibold md:border-b md:border-gray-100 md:bg-slate-100 p-4 pl-6 rounded-xl">
                    Reimagining MTSS: A Pathway to Whole School Well-Being
                  </h2>
                </div>
                <div className="pl-4">
                  <p className="p-4">Hosted by Kari Vogelgesang, Michael Furlong and Erin Dowdy delve into MTSS (Multi-Tiered System of Supports) and its impact on students&apos; holistic development, encouraging educators to pause and reconsider the WHY behind MTSS, and inspire them to reflect on their practice, embrace a student-centered approach, and champion the journey of self-determination for every student.</p>
                </div>
              </div>
              <div className="pl-4 pt-2 pb-6 flex flex-col lg:items-center lg:flex-row">
                <div>
                  <p className="pl-4 font-bold">
                    <a className="flex pb-2" href="https://education.ucsb.edu/people/dean-emeriti-faculty/michael-furlong" target="_blank" onClick={() => sendGAEvent('event', 'linkClicked', { value: 'Reimagining MTSS: Michael Furlong' })}>Michael Furlong <RxOpenInNewWindow size={18} className="ml-1 relative top-[2px]"/></a>
                    <a className="flex" href="https://education.ucsb.edu/research-faculty/bio?first=Erin&last=Dowdy" target="_blank" onClick={() => sendGAEvent('event', 'linkClicked', { value: 'Reimagining MTSS: Erin Dowdy' })}>Erin Dowdy <RxOpenInNewWindow size={18} className="ml-1 relative top-[2px]"/></a>
                  </p>
                </div>
                <div className="flex grow pl-4 pt-4 pr-8 lg:pr-6 lg:pt-0 lg:justify-end">
      {/*
                  <a href="https://scsmh.education.uiowa.edu/wp-content/uploads/2024/05/K-12-Suicide-Prevention-Practice-Brief-4.pdf" target="_blank">
                    <Button variant="outline">
                      <GrDocumentPdf size={20} className="mr-4"/>
                      View practice brief
                    </Button>
                  </a>

                  <Button onClick={() => handleClick('https://youtu.be/yO2MT3-kLYY?si=loWtxkfewlpmbdC4', 'buttonClicked', 'Reimagining MTSS: Watch video')}>
      */}
                  <a href="https://youtu.be/yO2MT3-kLYY?si=loWtxkfewlpmbdC4" target="_blank" onClick={() => sendGAEvent('event', 'linkClicked', { value: 'Reimagining MTSS: A Pathway to Whole School Well-Being' })}>
                    <Button>
                      Watch video
                      <BsPlayBtnFill size={18} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeaturedResourceCard