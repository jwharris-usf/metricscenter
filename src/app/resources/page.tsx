import Hero from "../components/ui/Hero";
import { GrDocumentPdf } from "react-icons/gr";
import { RxOpenInNewWindow } from "react-icons/rx";
import { RxDownload } from "react-icons/rx";
import { RxVideo } from "react-icons/rx";
import ResourceCard from "../components/ui/ResourceCard";
import { Button } from "../components/ui/Button";

import { BsPlayBtnFill } from "react-icons/bs";

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

      <section className="mt-20">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="text-gray-600">

            <div className="rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/25">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 lg:w-1/3 p-2">
                  <div className="overflow-hidden border rounded-xl h-full">
                    <a href="https://youtu.be/yO2MT3-kLYY?si=loWtxkfewlpmbdC4" target="_blank">
                      <img className="mx-auto h-full rounded-xl object-cover object-center hover:scale-110 duration-500" src="images/MTSS-Podcast.png" alt="Reimagining MTSS: A Pathway to Whole School Well-Being" loading="lazy" width="" height=""/>
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
                      <p className="p-4">Hosted by Kari Vogelgesang, Michael Furlong and Erin Dowdy delve into MTSS (Multi-Tiered System of Supports) and its impact on students' holistic development, encouraging educators to pause and reconsider the WHY behind MTSS, and inspire them to reflect on their practice, embrace a student-centered approach, and champion the journey of self-determination for every student.</p>
                    </div>
                  </div>
                  <div className="pl-4 pt-2 pb-6 flex items-center">
                    <div>
                      <p className="pl-4 font-bold">
                        <a className="flex pb-2" href="https://education.ucsb.edu/people/dean-emeriti-faculty/michael-furlong" target="_blank">Michael Furlong <RxOpenInNewWindow size={18} className="ml-1 relative top-[2px]"/></a>
                        <a className="flex" href="https://education.ucsb.edu/research-faculty/bio?first=Erin&last=Dowdy" target="_blank">Erin Dowdy <RxOpenInNewWindow size={18} className="ml-1 relative top-[2px]"/></a>
                      </p>
                    </div>
                    <div className="flex grow justify-end pr-8 md:pr-6">
{/*
                      <a href="https://scsmh.education.uiowa.edu/wp-content/uploads/2024/05/K-12-Suicide-Prevention-Practice-Brief-4.pdf" target="_blank">
                        <Button variant="outline">
                          <GrDocumentPdf size={20} className="mr-4"/>
                          View practice brief
                        </Button>
                      </a>
*/}
                      <a href="https://youtu.be/yO2MT3-kLYY?si=loWtxkfewlpmbdC4" target="_blank">
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
      </section>

      <section className="pt-24" id="documents">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <h2 className="text-4xl font-black border-b border-gray-300">Documents</h2>

          <div className="flex items-center bg-gray-100/75 hover:bg-slate-200">
            <div className="flex flex-col p-4">
              <div className="flex flex-row grow font-semibold">
                K-12 Suicide Prevention Practice Brief
                <GrDocumentPdf size={20} className="ml-3"/>
              </div>
              <div className="text-sm text-gray-500 mt-1">This practice brief provides educators with information and resources on...</div>
            </div>
            <div className="flex items-center justify-end grow">
              <a className="m-4" href="https://scsmh.education.uiowa.edu/wp-content/uploads/2024/05/K-12-Suicide-Prevention-Practice-Brief-4.pdf" target="_blank">
                <Button variant="ghost">
                  View <RxOpenInNewWindow size={18} className="ml-2"/>
                </Button>
              </a>
              <a className="m-4" href="https://scsmh.education.uiowa.edu/wp-content/uploads/2024/05/K-12-Suicide-Prevention-Practice-Brief-4.pdf" download target="_blank">
                <Button variant="ghost">
                  Download <RxDownload size={18} className="ml-2"/>
                </Button>
              </a>
            </div>
          </div>

          <div className="flex items-center hover:bg-slate-200">
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

          <div className="flex items-center bg-gray-100/75 hover:bg-slate-200">
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

          <div className="flex items-center hover:bg-slate-200">
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
            
            <a href="https://youtu.be/2vCVScivgQk" className="hover:no-underline" target="_blank">
              <div className="rounded-lg border border-gray-100 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 sm:p-12 grow h-full text-left">
                <div>
                  <div className="border border-gray-200 bg-gray-500 hover:bg-gray-200 transition duration-500">
                    <span className="relative flex items-center">
                      <img src="images/prevention-brief.png" className="opacity-50 object-cover h-[125px]" height="100%" width="100%" alt="K-12 Suicide Prevention" />
                      <BsPlayBtnFill className="h-14 w-full text-brand-blue absolute" />
                    </span>
                  </div>

                  <div className="pt-4 space-y-6">
                    <p className="text-gray-400 text-sm">April 30, 2024</p>
                    <p className="text-lg font-semibold">
                      <span>K-12 Suicide Prevention</span>
                    </p>
                    <p>
                      <span className="text-sm btn-brand-blue text-white hover:opacity-90 transform transition flex w-max duration-500 hover:scale-105 font-medium rounded-lg px-4 py-2">
                        Watch
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          
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