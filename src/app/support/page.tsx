import Hero from "../components/ui/Hero";

export default function Support() {
  return (
    <>
      <Hero type={'Secondary'} title={'Support'} />

      <section className="flex justify-center pt-24">
        <iframe width="900" height="1200" src="https://app.smartsheet.com/b/form/c8e0e4e86a1c4783971aa7de2aba71d8"></iframe>
      </section>
    </>
  );
}