  import Hero from "../components/ui/Hero";
import BioCard from "../components/ui/BioCard";

async function fetchBioCards() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try {
 {/*   const res = await fetch(`${process.env.STRAPI_API_DOMAIN}` + "/api/about-us?populate[bio_card][populate][photo][populate]=true&populate[bio_card][populate][photo][fields][0]=name&populate[bio_card][populate][photo][fields][1]=url", options)*/}
    const res = await fetch("https://metricscenter-cms-qf74e.ondigitalocean.app/api/about-us?populate[bio_card][populate][photo][populate]=true&populate[bio_card][populate][photo][fields][0]=name&populate[bio_card][populate][photo][fields][1]=url", options)
    const response = await res.json()
    return response
  } catch (err) {
    console.error(err)
  }
}

export default async function Home() {
  const bioCards = await fetchBioCards()
  return (
    <>
      <section>
        <Hero type={'Secondary'} title={'About us'} />
      </section>

      <section id="about-us">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="gap-6 flex flex-col lg:flex-row">

            {/* Default - hidden */}
            <div className="hidden lg:block flex flex-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 lg:w-1/2 md:overflow-visible md:px-0">
              <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                <div className="h-[32rem]">
                  <div className="absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                    <img src="/images/mental-health-colab.jpg" className="mx-auto h-30 w-96 rounded-t-xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="Mental health colab" loading="lazy" width="850" height="1780" />
                  </div>
                </div>
              </div>
            </div>
            {/* >=lg - block */}
            <div className="flex lg:hidden justify-center lg:mt-12 overflow-hidden p-5">
              <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                <div className="flex justify-center overflow-hidden p-8">
                  <img src="/images/mental-health-colab.jpg" className="rounded-lg" alt="Mental health colab" loading="lazy" width="" height="" />
                </div>
              </div>
            </div>
            
            <div className="flex align-center lg:w-1/2 pl-0 lg:pl-8">
              <div>
                <div>
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
                <div>
                  <p className="mt-4 font-bold">
                    METRICS: Building Stronger Training Programs
                  </p>
                  <ol className="list-decimal list-inside mt-5">
                    <li className="pb-4">
                      Provide individualized assistance
                    </li>
                    <li className="pb-4">
                      Collect and share best practices. Provide technical assistance to grantees through a tiered approach that includes universal support to all, targeted support on select topics for subsets of grantees, and intensive support for individual grantees. Disseminate best practices in credentialing, recruiting, training and developing, and retaining school-based mental health services providers
                    </li>
                    <li>
                      Analyze data and outcomes. Support high-quality grantee data collection and analysis so that programs can continually improve at training the next generation
                    </li>
                  </ol>
                </div>
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

      <section className="relative pt-32" id="meet-our-team">
        <div aria-hidden="true" className="absolute inset-0 top-80 grid grid-cols-2 opacity-50">
          <div className="h-60 bg-gradient-to-br from-blue-900 to-purple-400 blur-[110px]"></div>
          <div className="h-60 bg-gradient-to-r from-blue-400 to-sky-400 blur-[110px]"></div>
        </div>
        <div className="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl xl:text-5xl">Meet our team</h2>
          </div>
          <div className="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3">

            {bioCards.data.attributes.bio_card.map((bioCard:any) => (
              <div key={bioCard.id}>
                <BioCard bioCard={bioCard} />
              </div>
            ))}

          </div>
        </div>
      </section>

    </>
  );
}
