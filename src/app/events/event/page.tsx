import Hero from "../../components/ui/Hero";

export default function Events() {
  return (
    <>
      <Hero type={'Secondary'} title={'Event'} />

      <section className="pt-24">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">

          <div className="flex flex-col">
            <div className="flex w-full h-80">
              <img src="../images/webinar-laptop.jpg" className="object-cover rounded-md opacity-50 hover:opacity-75 transition duration-500" alt="METRICS interactive webinar" loading="lazy" width="100%" />
            </div>
            <div className="flex flex-col py-10">
              <div className="flex flex-col">
                <div className="w-full">
                  <h1 className="font-black text-4xl pb-6">Exploring the ABCD Study Data: Positive and Negative Associations of Screen Use for Pre-Teens</h1>
                  <p>Date: <strong>May 9th, 2024</strong></p>
                  <p className="pt-2">Time: <strong>12:00pm - 1:00pm CST</strong></p>
                </div>
                <div className="pt-8">
                  <a href="https://uiowa.qualtrics.com/jfe/form/SV_eA5OUIBto8jyES2" className="text-sm btn-brand-blue text-white hover:opacity-90 transform transition flex w-max duration-500 hover:scale-105 font-medium rounded-md px-4 py-2">
                    Register to attend
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 pt-8">
            <p>Join us in-person or on Zoom to learn about the latest school mental health research from national expert Dr. Elizabeth Hoffman.</p>
            <p className="pt-6">Dr. Hoffman is the Associate Director of the Adolescent Brain Cognitive Development (ABCD) Project at the National Institute on Drug Abuse. She has advocated for science and health policy priorities in the U.S. Senate and at the American Psychological Association. Dr. Hoffman holds a Ph.D. in cognitive neuropsychology from the George Washington University.</p>
          </div>
          
          <p className="pt-6">
            <strong>Online:</strong> Zoom<br/>
            <strong>In-Person:</strong> University of Iowa College of Education Lindquist Center, N116
          </p>

          <p className="pt-6">
            <strong>Registration is required to attend.</strong><br/>
            <span className="text-sm">Please note: this webinar will be recorded and made available to all grantees following the session.</span>
          </p>
          <div className="pt-10">
            <a href="https://uiowa.qualtrics.com/jfe/form/SV_eA5OUIBto8jyES2" className="text-base btn-brand-blue text-white hover:opacity-90 transform transition flex w-max duration-500 hover:scale-105 font-medium rounded-md px-20 py-4">
              Register to attend
            </a>
          </div>
          <p className="text-sm pt-3">
            You can also copy and paste this url into your browser:
          </p>
          <p className="text-sm pt-1">
          https://uiowa.qualtrics.com/jfe/form/SV_eA5OUIBto8jyES2
          </p>

        </div>
      </section>
    </>
  );
}