import Hero from "../components/ui/Hero";
import { GrDocumentPdf } from "react-icons/gr";
import { RxOpenInNewWindow } from "react-icons/rx";
import { RxDownload } from "react-icons/rx";
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
      <section className="pt-24" id="documents">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <h2 className="text-4xl font-black border-b border-gray-300">Documents</h2>

          <div className="flex items-center bg-gray-100/75 hover:bg-slate-200">
            <div className="flex flex-col p-4">
              <div className="flex flex-row grow font-semibold">
                K-12 Suicide Prevention Practice Brief
                <GrDocumentPdf size={20} className="ml-3"/>
              </div>
              <div className="text-sm text-gray-500 mt-1">Suicide is the 3rd leading cause of death for youth ages 10-24...</div>
            </div>
            <div className="flex items-center justify-end grow">
              <a className="m-4" href="/images/K-12-Suicide-Prevention-Practice-Brief.pdf" target="_blank">
                <Button variant="ghost">
                  View <RxOpenInNewWindow size={18} className="ml-2"/>
                </Button>
              </a>
              <a className="m-4" href="/images/K-12-Suicide-Prevention-Practice-Brief.pdf" download target="_blank">
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
                METRICS or DOE - Who should I contact?
                <GrDocumentPdf size={20} className="ml-3"/>
              </div>
              <div className="text-sm text-gray-500 mt-1">I have a question about my SBMH/MHSP grant. Who should I contact?</div>
            </div>
            <div className="flex items-center justify-end grow">
              <a className="m-4" href="/images/METRICS-or-DOE-onepager-20240422.pdf" target="_blank">
                <Button variant="ghost">
                  View <RxOpenInNewWindow size={18} className="ml-2"/>
                </Button>
              </a>
              <a className="m-4" href="/images/METRICS-or-DOE-onepager-20240422.pdf" download target="_blank">
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