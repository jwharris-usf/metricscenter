import Hero from "../components/ui/Hero";
import { GrDocumentPdf } from "react-icons/gr";
import { RxOpenInNewWindow } from "react-icons/rx";
import { RxDownload } from "react-icons/rx";
import { RxVideo } from "react-icons/rx";
import ResourceCard from "../components/ui/ResourceCard";
import { Button } from "../components/ui/Button";

async function fetchResourceCards() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try {
    const res = await fetch(`${process.env.STRAPI_API_DOMAIN}` + "/api/home?populate[resource_card][populate][thumbnail][populate]=true&populate[resource_card][populate][thumbnail][fields][0]=name&populate[resource_card][populate][thumbnail][fields][1]=url&populate[blocks][populate]=true", options)
    const response = await res.json()
    return response
  } catch (err) {
    console.error(err)
  }
}

export default async function Resources() {
  const resourceCards = await fetchResourceCards()
  return (
    <>
      <Hero type={'Secondary'} title={'Resources'} />
{/*
      <section className="pt-24">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <h2 className="text-4xl font-black border-b border-gray-300">Recently added</h2>
          <div className="mt-8 flex gap-8">
            <div className="lg:border border-gray-200 lg:w-1/3 bg-slate-50 p-4 text-left h-[175px]">
              Lorem ipsum
            </div>
            <div className="lg:border border-gray-200 lg:w-1/3 bg-slate-50">

            </div>
            <div className="lg:border border-gray-200 lg:w-1/3 bg-slate-50">

            </div>
          </div>
        </div>
      </section>
  */}
      <section className="mt-20">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="text-gray-600">
            <div className="group relative mb-12 overflow-hidden rounded-3xl border border-gray-100 bg-white pr-8 pl-8 pt-8 shadow-2xl shadow-gray-600/25 lg:pr-0">
              <div className="gap-6 lg:flex">
                <div className="relative gap-6 pb-6 sm:flex sm:pb-2 lg:block lg:w-1/3 lg:pb-8">
                  <div className="-mx-6 -mt-6 flex rounded-2xl border bg-gray-100 p-2 sm:-mr-0 sm:w-1/3 lg:mx-0 lg:mt-0 lg:w-auto lg:rounded-lg">
                    <img className="m-auto h-full w-auto object-cover object-top rounded-lg" src="images/prevention-brief.png" loading="lazy" alt="Prevention brief" width="" height=""/>
                  </div>
                  <div className="mt-6 sm:mt-0 sm:w-2/3 sm:pb-6 lg:mt-6 lg:w-auto lg:pb-0">
                    <h4 className="mb-6 text-2xl font-bold">K-12 Suicide Prevention</h4>
                    <div className="border-t border-gray-200 pt-4">
                      <div className="mt-2 mb-8 text-gray-600">
                        <p>This practice brief provides educators with information and resources on suicide prevention, intervention, and postvention that is evidence-based and applicable to the K-12 school setting.</p>
                        <div className="font-bold flex mt-1">
                          <a className="flex" href="https://scsmh.education.uiowa.edu/practice-brief/k-12-suicide-prevention/" target="_blank">Visit website <RxOpenInNewWindow size={18} className="ml-1 relative top-[2px]"/></a>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex justify-between flex-col xl:flex-row w-full gap-4 xl:gap-0">
                          <a href="https://youtu.be/2vCVScivgQk" target="_blank">
                            <Button variant="outline">                              
                              <RxVideo size={20} className="mr-4"/>
                              Watch video
                            </Button>
                          </a>
                          <a href="https://scsmh.education.uiowa.edu/wp-content/uploads/2024/05/K-12-Suicide-Prevention-Practice-Brief-4.pdf" target="_blank">
                            <Button variant="outline">
                              <GrDocumentPdf size={20} className="mr-4"/>
                              View practice brief
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="-mx-6 h-100 rounded-t-2xl border-r border-t border-l pr-2 pt-2 pl-2 lg:mx-0 lg:w-2/3 lg:rounded-tr-none lg:rounded-tl-2xl lg:border-r-0 lg:pr-0 lg:pb-0">
{/*                  <div className="bg-[url('/images/prevention-brief-video-thumbnail.png')] bg-[size:100%] bg-center bg-no-repeat hover:bg-[size:105%] rounded-2xl duration-500 transition-all transform h-full">*/}
                    <a href="https://youtu.be/2vCVScivgQk" target="_blank">
                    <img src="images/prevention-brief-video-thumbnail.png" className="h-full rounded-tl-xl rounded-tr-xl lg:rounded-tr-none border object-cover object-center opacity-80 hover:opacity-100 duration-500" alt="Prevention brief video thumbnail" loading="lazy" width="1850" height="1780" />
                    </a>
{/*                  </div>*/}
                </div>
              </div>
            </div>
{/*
            <div className="mb-12 grid gap-6 lg:grid-cols-2">
              <a className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none" href="/pages/story">
                <div className="relative gap-6 sm:flex">
                  <div className="-mx-6 -mt-6 flex rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-900/60 sm:mr-0 sm:-mb-6 sm:-ml-6 sm:-mt-6 sm:w-1/3 md:w-2/5 lg:w-1/3">
                    <img className="m-auto w-auto sm:h-16 lg:h-12" src="./../images/clients/nuxt.svg" loading="lazy" alt="nuxtjs logo" width="" height="">
                  </div>
                  <div className="mt-6 space-y-6 sm:mt-0 sm:w-2/3 md:w-3/5 lg:w-2/3">
                    <div className="">
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Increased sales by 360%</h2>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>

                      <div className="relative my-4 before:absolute before:inset-y-0 before:-left-0.5 before:z-[1] before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-gray-400 after:absolute after:inset-y-0 after:-right-0.5 after:z-[1] after:my-auto after:h-1 after:w-1 after:rounded-full after:bg-gray-400">
                        <div aria-hidden="true" className="absolute inset-0 m-auto h-px w-full border-t border-dashed dark:border-gray-600"></div>
                        <div className="relative flex items-center justify-between pl-12 pr-6">
                          <div className="relative flex items-center before:absolute before:inset-y-0 before:-right-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-red-400 dark:bg-gray-800">
                            <span className="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-sm tracking-wider text-red-900 dark:border-red-300/40 dark:bg-red-500/10 dark:text-red-300">132k</span>
                          </div>
                          <div className="relative flex items-center before:absolute before:inset-y-0 before:-left-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-green-400 dark:bg-gray-800">
                            <span className="rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-sm tracking-wider text-green-900 dark:border-green-300/40 dark:bg-green-500/10 dark:text-green-300">396k</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
                    </div>
                  </div>
                </div>
              </a>
              <a className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none" href="/pages/story">
                <div className="relative gap-6 sm:flex">
                  <div className="-mx-6 -mt-6 flex rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-900/60 sm:mr-0 sm:-mb-6 sm:-ml-6 sm:-mt-6 sm:w-1/3 md:w-2/5 lg:w-1/3">
                    <img className="m-auto w-auto sm:h-16 lg:h-12" src="./../images/clients/nuxt.svg" loading="lazy" alt="nuxtjs logo" width="" height="">
                  </div>
                  <div className="mt-6 space-y-6 sm:mt-0 sm:w-2/3 md:w-3/5 lg:w-2/3">
                    <div className="">
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Increased sales by 360%</h2>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>

                      <div className="relative my-4 before:absolute before:inset-y-0 before:-left-0.5 before:z-[1] before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-gray-400 after:absolute after:inset-y-0 after:-right-0.5 after:z-[1] after:my-auto after:h-1 after:w-1 after:rounded-full after:bg-gray-400">
                        <div aria-hidden="true" className="absolute inset-0 m-auto h-px w-full border-t border-dashed dark:border-gray-600"></div>
                        <div className="relative flex items-center justify-between pl-12 pr-6">
                          <div className="relative flex items-center before:absolute before:inset-y-0 before:-right-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-red-400 dark:bg-gray-800">
                            <span className="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-sm tracking-wider text-red-900 dark:border-red-300/40 dark:bg-red-500/10 dark:text-red-300">132k</span>
                          </div>
                          <div className="relative flex items-center before:absolute before:inset-y-0 before:-left-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-green-400 dark:bg-gray-800">
                            <span className="rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-sm tracking-wider text-green-900 dark:border-green-300/40 dark:bg-green-500/10 dark:text-green-300">396k</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a className="group relative row-start-1 rounded-3xl border border-gray-100 bg-white p-8 dark:border-gray-700 dark:bg-gray-800 sm:col-span-2 md:row-start-2 lg:col-span-1 lg:row-start-1" href="/pages/story">
                <div className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
                <div className="relative gap-6 sm:flex lg:block">
                  <div className="-mx-6 -mt-6 flex rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-800 sm:mr-0 sm:-mb-6 sm:-ml-6 sm:-mt-6 sm:w-1/3 lg:-mx-6 lg:mb-0 lg:w-auto">
                    <img className="m-auto w-auto dark:contrast-100 dark:grayscale dark:invert sm:h-16 lg:h-12" src="./../images/clients/lilly.png" loading="lazy" alt="lilly" width="" height="">
                  </div>
                  <div className="mt-6 space-y-6 sm:mt-0 sm:w-2/3 lg:mt-6 lg:w-auto">
                    <p className="text-gray-600 dark:text-gray-400">Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>

                    <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                      <p className="mt-2 mb-8 text-gray-600 dark:text-gray-300">Veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
                      <div className="flex gap-4">
                        <img className="h-12 w-12 rounded-full" src="./../images/avatars/avatar-4.webp" alt="user avatar" width="200" height="200" loading="lazy">
                          <div>
                            <h2 className="text-lg font-medium text-gray-700 dark:text-white">Randy Doe</h2>
                            <p className="text-sm text-gray-500">Founder CEO</p>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="space-y-4">
                <div className="relative rounded-3xl border border-gray-100 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                  <div className="relative">
                    <div className="rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-800">
                      <img className="mx-auto h-12 w-auto dark:contrast-100 dark:grayscale dark:invert" src="./../images/clients/microsoft.svg" loading="lazy" alt="microsoft" width="" height="">
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                  <div className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
                  <div className="relative">
                    <div className="-mx-6 -mt-6 rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-800">
                      <img className="mx-auto h-12 w-auto dark:contrast-100 dark:grayscale dark:invert" src="./../images/clients/ge.svg" loading="lazy" alt="ge" width="" height="">
                    </div>
                    <p className="mb-3 mt-6 text-gray-600 dark:text-gray-400">Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
                    <div className="flex items-end gap-4">
                      <a href="https://tailus.io">website.com</a>
                      <a aria-label="got to website" className="relative ml-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-100 before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 group-hover:before:scale-110 dark:before:border-gray-700 dark:before:bg-gray-800" href="/pages/contact">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="relative h-4 w-4 transition duration-300 group-hover:-rotate-45">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                  <div className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80"></div>
                  <div className="relative">
                    <div className="-mx-6 -mt-6 rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-800">
                      <img className="mx-auto h-12 w-auto dark:contrast-100 dark:grayscale dark:invert" src="./../images/clients/airbnb.svg" loading="lazy" alt="airbnb" width="" height="">
                    </div>
                    <p className="mb-3 mt-6 text-gray-600 dark:text-gray-400">Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
                    <div className="flex items-end gap-4">
                      <a href="https://tailus.io">website.com</a>
                      <a aria-label="go to website" className="relative ml-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-100 before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 group-hover:before:scale-110 dark:before:border-gray-700 dark:before:bg-gray-800" href="/pages/contact">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="relative h-4 w-4 transition duration-300 group-hover:-rotate-45">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-3xl border border-gray-100 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                  <div className="relative">
                    <div className="rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-800">
                      <img className="mx-auto h-12 w-auto dark:contrast-100 dark:grayscale dark:invert" src="./../images/clients/microsoft.svg" loading="lazy" alt="airbnb" width="" height="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
*/}
          </div>
        </div>
      </section>








      <section className="pt-24" id="documents">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <h2 className="text-4xl font-black border-b border-gray-300">Documents</h2>

          <div className="flex items-center bg-gray-100/75 hover:bg-slate-200">
            <div className="flex flex-col p-4">
              <div className="flex flex-row grow font-semibold">
                SBMH Guidance - Year 1 GPRAs Reporting
                <GrDocumentPdf size={20} className="ml-3"/>
              </div>
              <div className="text-sm text-gray-500 mt-1">This worksheet includes guidance for grantees completing Section A of the...</div>
            </div>
            <div className="flex items-center justify-end grow">
              <a className="m-4" href="/images/SBMH-GPRA-Guidance-Year-1-FINAL.pdf" target="_blank">
                <Button variant="ghost">
                  View <RxOpenInNewWindow size={18} className="ml-2"/>
                </Button>
              </a>
              <a className="m-4" href="/images/SBMH-GPRA-Guidance-Year-1-FINAL.pdf" download target="_blank">
                <Button variant="ghost">
                  Download <RxDownload size={18} className="ml-2"/>
                </Button>
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-slate-200">
            <div className="flex flex-col p-4">
              <div className="flex flex-row grow font-semibold">
                MHSP Guidance - Year 1 GPRAs Reporting
                <GrDocumentPdf size={20} className="ml-3"/>
              </div>
              <div className="text-sm text-gray-500 mt-1">This worksheet includes guidance for grantees completing Section A of the...</div>
            </div>
            <div className="flex items-center justify-end grow">
              <a className="m-4" href="/images/MHSP-GPRA-Guidance-Year-1-FINAL.pdf" target="_blank">
                <Button variant="ghost">
                  View <RxOpenInNewWindow size={18} className="ml-2"/>
                </Button>
              </a>
              <a className="m-4" href="/images/MHSP-GPRA-Guidance-Year-1-FINAL.pdf" download target="_blank">
                <Button variant="ghost">
                  Download <RxDownload size={18} className="ml-2"/>
                </Button>
              </a>
            </div>
          </div>

          <div className="flex items-center bg-gray-100/75 hover:bg-slate-200">
            <div className="flex flex-col p-4">
              <div className="flex flex-row grow font-semibold">
                METRICS or ED - Who should I contact?
                <GrDocumentPdf size={20} className="ml-3"/>
              </div>
              <div className="text-sm text-gray-500 mt-1">I have a question about my SBMH/MHSP grant. Who should I contact?</div>
            </div>
            <div className="flex items-center justify-end grow">
              <a className="m-4" href="/images/METRICS-or-ED-onepager-20240422.pdf" target="_blank">
                <Button variant="ghost">
                  View <RxOpenInNewWindow size={18} className="ml-2"/>
                </Button>
              </a>
              <a className="m-4" href="/images/METRICS-or-ED-onepager-20240422.pdf" download target="_blank">
                <Button variant="ghost">
                  Download <RxDownload size={18} className="ml-2"/>
                </Button>
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="pt-24" id="videos">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <h2 className="text-4xl font-black border-b border-gray-300">Videos</h2>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resourceCards.data.attributes.resource_card.map((resourceCard:any) => (
              <div key={resourceCard.id} className="flex">
                <ResourceCard resourceCard={resourceCard} />
              </div>
            ))}
          </div>

        </div>
      </section>

    </>
  );
}