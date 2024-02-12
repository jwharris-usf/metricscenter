import { FC } from 'react'
import Breadcrumbs from './Breadcrumbs'
import { Button } from "@/components/ui/button"

interface HeroProps {
  type: string
  title: string
}

const Hero: FC<HeroProps> = ({ type, title }) => {
  return (
    <div>
      {type == "Primary" ? (
        <section className="hero-primary pt-[175px] md:pt-[200px] pb-[70px] md:pb-[100px] border-b border-blue-100 bg-blue-100/25 bg-gradient-to-br from-white to-blue-200/50">
          <div className="px-8">
            <div className="mx-auto max-w-[700px] text-center">
              <h1 className="font-bold text-5xl md:text-7xl">
                Recruiting, training, and retaining
              </h1>
              <p className="mt-5 md:mt-10 text-lg">METRICS provides support to states, districts, and schools with the goal of increasing students' access to highly qualified mental health professionals in their schools.</p>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="pt-40 pb-20 bg-gray-100">
            <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
              <h1 className="font-black text-5xl md:text-7xl">
                About us
              </h1>
            </div>
          </section>

{/*          <Breadcrumbs />*/}
          
          <section className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0 pt-4 text-sm pb-20">
            <a href="../index.html">Home</a> &gt; About us
          </section>
        </>
      )}
      <Button variant="outline">Button</Button>

    </div>
  )
}

export default Hero