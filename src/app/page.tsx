import Hero from "./components/ui/Hero";
import ResourceCard from "./components/ui/ResourceCard";
import Alert from "./components/ui/Alert";

async function fetchAlerts() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`
    }
  }
  try {
    const res = await fetch(`${process.env.STRAPI_API_DOMAIN}` + "/api/home?populate[alert][populate][content][populate]=true", options)
    const response = await res.json()
    return response
  } catch (err) {
    console.error(err)
  }
}

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

export default async function Home() {
  const resourceCards = await fetchResourceCards()
  const alerts = await fetchAlerts()
  return (
    <>
      <Hero type={'Primary'} title={'Recruiting, training, and retaining'} subTitle={'METRICS provides support to states, districts, and schools with the goal of increasing students\' access to highly qualified mental health professionals in their schools.'} />

{/*      { alerts && <Alert alert={alerts.data.attributes.alert} /> } */}

      <section className="pt-20 md:pt-32">
        <div className="mx-auto xl:max-w-6xl px-4 sm:px-12 xl:px-0 flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2 lg:pr-10">
            <h2 className="text-4xl font-black">Explore grant funded projects</h2>
            <p className="pt-5">
              Visit our Interactive Project Map to learn more about School Based Mental Health (SBMH) and Mental Health Service Professional (MHSP) grant funded projects around the county.
            </p>
            <div className="mt-8">
              <a href="/about-us/interactive-map" className="text-white text-sm btn-brand-blue hover:opacity-90 transform transition flex w-max duration-500 hover:scale-105 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5">
                Learn more
              </a>
            </div>
          </div>
          <div className="lg:border border-gray-200 mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
            <a href="/about-us/interactive-map">
              <img src="images/interactive-map-thumbnail.png" className="h-52 lg:h-72 w-auto lg:w-full opacity-60 hover:opacity-90 transition duration-500 border-none" />
            </a>
          </div>
        </div>
      </section>

      <section className="pt-20 md:pt-32">
        <div className="mx-auto xl:max-w-6xl px-4 sm:px-12 xl:px-0">
          <div className="text-center">
            <h1 className="text-4xl font-black lg:text-5xl">About us</h1>
          </div>
          <div className="mt-10 lg:mt-20">
            <div className="gap-6 flex flex-col lg:flex-row">

              {/* Default - hidden */}
              <div className="hidden lg:block flex flex-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 lg:w-1/2 md:overflow-visible md:px-0">
                <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                  <div className="h-[32rem]">
                    <div className="absolute inset-0 z-10 flex translate-y-0 scale-100 items-end overflow-hidden px-6 opacity-100 transition duration-500 sm:px-10">
                      <img src="images/student-study-textbook.png" className="mx-auto h-30 w-96 rounded-t-xl border object-cover object-top shadow-2xl sm:h-[28rem]" alt="Mental health colab" loading="lazy" width="850" height="1780" />
                    </div>
                  </div>
                </div>
              </div>
              {/* >=lg - block */}
              <div className="flex lg:hidden justify-center lg:mt-12 overflow-hidden p-5">
                <div className="relative bg-gray-100 before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-gray-200 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-gray-200">
                  <div className="flex justify-center overflow-hidden p-8">
                    <img src="images/student-study-textbook.png" className="rounded-lg" alt="Mental health colab" loading="lazy" width="" height="" />
                  </div>
                </div>
              </div>
              
              <div className="flex align-center lg:w-1/2 pl-8">
                <div>
                  <div>
                    <p className="mt-4">
                      <strong>METRICS</strong> is a partnership between the University of Wisconsin-Madison, the University of South Florida, the University of Iowa, and the University of California, Santa Barbara. Together, we are committed to increasing K-12 student access to critical mental health services in their schools by addressing the nationwide shortage of school-based mental health professionals.
                    </p>
                    <p className="mt-8">
                      <strong>METRICS</strong> supports federally-funded grantees who are dedicated to addressing the national shortage of school-based mental health practitioners. These grantees received funding from the US Department of Education for either a School Based Mental Health Services (SBMH) or a Mental Health Service Professional (MHSP) project to <span className="font-bold italic">recruit, train, and retain</span> a strong mental health workforce in our K-12 schools across the country.
                    </p>
                  </div>
                  <div>
                    <div className="mt-8">
                      <a href="/about-us" className="text-white text-sm btn-brand-blue hover:opacity-90 transform transition flex w-max duration-500 hover:scale-105 font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-32" id="resources">
        <div aria-hidden="true" className="absolute inset-0 top-80 grid grid-cols-2 opacity-50">
          <div className="h-60 bg-gradient-to-br from-blue-900 to-purple-400 blur-[110px]"></div>
          <div className="h-40 bg-gradient-to-r from-blue-400 to-sky-400 blur-[110px]"></div>
        </div>
        <div className="relative mx-auto xl:max-w-6xl px-4 sm:px-12 xl:px-0">
          <div className="text-center">
            <h1 className="text-4xl font-black lg:text-5xl">Resources</h1>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

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
