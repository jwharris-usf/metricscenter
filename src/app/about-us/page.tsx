import Hero from "../components/ui/Hero";
import BioCard from "../components/ui/BioCard";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

async function fetchBioCards() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try {
    const res = await fetch(`${process.env.STRAPI_API_DOMAIN}` + "/api/about-us?populate[bio_card][populate][photo][populate]=true&populate[bio_card][populate][photo][fields][0]=name&populate[bio_card][populate][photo][fields][1]=url&populate[blocks][populate]=true", options)
    const response = await res.json()
    return response
  } catch (err) {
    console.error(err)
  }
}

export default async function AboutUs() {
  const bioCards = await fetchBioCards()
  return (
    <>
      <Hero type={'Secondary'} title={'About us'} />

      <section id="metrics" className="pt-24">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl xl:text-5xl">METRICS</h2>
            <p className="text-xl pt-3">
              Mental Health Evaluation, Training, Research, and Innovation Center for Schools
            </p>
            <p className="pt-4 md:w-2/3 mx-auto italic font-bold flex">
              {/*<BiSolidQuoteAltLeft className="text-7xl text-gray-300 relative top-[-15px]" />*/}
              K-12 student access to critical mental health services in high-need schools by addressing the shortage of school-based mental health professionals.
              {/*<BiSolidQuoteAltRight className="text-7xl text-gray-300 leading-6 relative top-[5px]" />*/}
            </p>
          </div>
        </div>
      </section>

      <section id="about-us" className="pt-28">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="gap-6 flex flex-col lg:flex-row">

            {/* Default - hidden */}
            <div className="hidden lg:block flex flex-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 lg:w-1/2 md:overflow-visible md:px-0">
              <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                <div className="h-[32rem]">
                  <div className="absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                    <img src="/images/student-study-textbook.png" className="mx-auto h-30 w-96 rounded-t-xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="Student studying with textbook" loading="lazy" width="850" height="1780" />
                  </div>
                </div>
              </div>
            </div>
            {/* >=lg - block */}
            <div className="flex lg:hidden justify-center lg:mt-12 overflow-hidden p-5">
              <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                <div className="flex justify-center overflow-hidden p-8">
                  <img src="/images/student-study-textbook.png" className="rounded-lg" alt="Student studying with textbook" loading="lazy" width="" height="" />
                </div>
              </div>
            </div>
            
            <div className="flex align-center lg:w-1/2 pl-0 lg:pl-8">
              <div>
                <div>
                  <h5 className="text-2xl mt-4 font-black">
                    Prioritizing training more school-based mental health providers
                  </h5>
                  <p className="mt-4">
                    <strong>METRICS</strong> supports federally-funded grantees who are dedicated to addressing the national shortage of school-based mental health practitioners. These grantees received funding from the US Department of Education for either a School Based Mental Health Services (SBMH) or a Mental Health Service Professional (MHSP) project to <span className="font-bold italic">recruit, train, and retain</span> a strong mental health workforce in our K-12 schools across the country. <strong>METRICS</strong> disseminates best-practice resources, provides individual grant assistance, and helps grantees ensure that they are meeting their targets, so that these grantees can continually improve as they grow the next generation of school-based mental health practitioners.
                  </p>
                  <p className="mt-8">
                    The research is clear: the shortage among mental health professionals in the US is a primary reason students lack access to the mental health services they need. <strong>METRICS</strong> is dedicated to closing this gap by providing schools with the tools they need to strengthen the pipeline of high-quality mental health professionals and increase access to critical mental health services in schools nationwide. These funds will help change the lives of children nationwide by building a mental health infrastructure in schools and communities across the country.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Second row */}
          <div className="gap-6 flex flex-col lg:flex-row mt-8 lg:mt-20">
            <div className="flex align-center lg:w-1/2 pr-0 lg:pr-8">
              <div>
                <h5 className="text-2xl mt-4 font-black">
                  Building stronger training programs
                </h5>
                <ol className="list-decimal list-inside mt-5">
                  <li className="pb-4">
                    <strong>Provide individualized assistance</strong><br/>
                    Provide technical assistance to grantees through a tiered approach that includes universal support to all, targeted support on select topics for subsets of grantees, and intensive support for individual grantees.
                  </li>
                  <li className="pb-4">
                    <strong>Collect and share best practices</strong><br/>
                    Disseminate best practices in credentialing, recruiting, training and developing, and retaining school-based mental health services providers.
                  </li>
                  <li>
                    <strong>Analyze data and outcomes</strong><br/>
                    Support high-quality grantee data collection and analysis so that programs can continually improve at training the next generation of school-based mental health providers.
                  </li>
                </ol>
              </div>
            </div>

            {/* Default - hidden */}
            <div className="hidden lg:block flex flex-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 lg:w-1/2 md:overflow-visible md:px-0">
              <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                <div className="h-[32rem]">
                  <div className="absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                    <img src="/images/UCSB_-1703x2048.jpg" className="mx-auto h-30 w-96 rounded-t-xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="UCSB Gevirtz School's Department of Counseling, Clinical and School Psychology professors" loading="lazy" width="850" height="1780" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-32">
        <div className="bg-slate-100 py-20">
          <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2 lg:pr-10">
              <h2 className="text-4xl font-black">Explore grant funded projects</h2>
              <p className="pt-5">
                Visit our Interactive Project Map to learn more about School Based Mental Health (SBMH) and Mental Health Service Professional (MHSP) grant funded projects around the country.
              </p>
              <div className="mt-8">
                <a href="/about-us/interactive-map" className="text-white text-sm btn-brand-blue hover:opacity-90 transform transition flex w-max duration-500 hover:scale-105 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5">
                  Learn more
                </a>
              </div>
            </div>
            <div className="lg:border border-gray-200 mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
              <a href="/about-us/interactive-map">
                <img src="../images/interactive-map-thumbnail.png" className="h-52 lg:h-72 w-auto lg:w-full opacity-60 hover:opacity-90 transition duration-500 border-none" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-32" id="meet-our-team">
{/*
        <div aria-hidden="true" className="absolute inset-0 top-80 grid grid-cols-2 opacity-50">
          <div className="h-60 bg-gradient-to-br from-blue-900 to-purple-400 blur-[110px]"></div>
          <div className="h-60 bg-gradient-to-r from-blue-400 to-sky-400 blur-[110px]"></div>
        </div>
*/}
        <div className="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="text-center">
            <h2 className="text-3xl font-black md:text-4xl xl:text-5xl">Meet our team</h2>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {bioCards.data.attributes.bio_card.map((bioCard:any) => (
              <div key={bioCard.id} className="flex">
                <BioCard bioCard={bioCard} />
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
}