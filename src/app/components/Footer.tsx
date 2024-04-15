'use client'

import React from 'react'

const Footer = () => {
  return (
    <>
      <section className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 pt-32">
        <div className="border-y border-gray-100 text-center py-12 md:py-16">
          <div className="flex flex-wrap justify-center xl:justify-between items-center gap-14 lg:gap-14">
            <a href="https://edpsych.education.wisc.edu"><img className="h-12 w-auto lg:h-14" src="/images/logos/UW.png" loading="lazy" alt="University of Wisconsin-Madison" width="" height=""/></a>
            <a href="https://www.usf.edu/education/areas-of-study/school-psychology/"><img className="h-8 w-auto lg:h-10" src="/images/logos/USF.jpg" loading="lazy" alt="University of South Florida" width="" height=""/></a>
            <a href="https://education.ucsb.edu/academic-programs/dept-of-counseling-clinical-school-psychology/overview"><img className="h-8 w-auto lg:h-10" src="/images/logos/UCSB.gif" loading="lazy" alt="University of California, Santa Barbara" width="" height=""/></a>
            <a href="https://scsmh.education.uiowa.edu"><img className="h-12 w-auto lg:h-16" src="/images/logos/UIOWA.png" loading="lazy" alt="University of Iowa" width="" height=""/></a>
          </div>
        </div>
      </section>

      <footer className="pt-12 md:pt-20 pb-12 bg-gray-100 border-t border-gray-300 shadow-[inset_0_5px_20px_rgba(0,0,0,0.1)]">
        <div>
          <div className="m-auto space-y-8 px-4 sm:px-12 xl:max-w-6xl xl:px-0">
            <div className="grid grid-cols-8 gap-6 md:gap-0">
              <div className="col-span-8 md:col-span-2 lg:col-span-2">
                <div className="flex h-full items-center justify-between gap-6 py-6 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                  <a aria-label="METRICS logo" className="flex items-center" href="/">
                    <img src="images/logos/metrics_logo.png" className="h-14" alt="METRICS logo"/>
                  </a>
                </div>
              </div>
              <div className="col-span-8 md:col-span-6 lg:col-span-6">
                <div className="grid grid-cols-2 pb-4 md:pb-8 sm:grid-cols-2">
                  <div className="flex flex-col lg:flex-row">
                    <div className="flex flex-col justify-start w-full">
                      <p className="font-bold">About</p>
                      <ul className="mt-2 list-inside space-y-2 text-sm">
                        <li>
                          <a href="/about-us">About us</a>
                        </li>
                        <li>
                          <a href="/about-us/#meet-our-team">Meet our team</a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-start w-full mt-8 lg:mt-0">
                      <p className="font-bold">Events</p>
                      <ul className="mt-2 list-inside space-y-2 text-sm">
                        <li>
                          <a href="/events">Webinars</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between">
                    <div className="flex flex-col justify-start w-full">
                      <p className="font-bold">Resources</p>
                      <ul className="mt-2 list-inside space-y-2 text-sm">
                        <li>
                          <a href="/#resources">Videos</a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-start w-full mt-8 lg:mt-0">
                      <p className="font-bold">Support</p>
                      <ul className="mt-2 list-inside space-y-2 text-sm">
                        <li>
                          <a href="/support">Technical Assistance<br />Request Form</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-sm pb-4">
                <p><span className="font-bold">Need help?</span> Contact us at</p>
                <p className="pt-1"><a href="mailto:support@metricscenter.org" className="underline decoration-dotted">support@metricscenter.org</a></p>
              </div>
              <div className="text-sm border-t border-gray-200 pt-4">
                <p><span className="font-bold">METRICS</span> &#160; © 2024 &#160; • &#160; All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer