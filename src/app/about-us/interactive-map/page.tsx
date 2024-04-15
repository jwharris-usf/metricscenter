import Hero from "@/app/components/ui/Hero";
import { Button } from "@/app/components/ui/Button";

export default function InteractiveMap() {
  return (
    <>
      <Hero type={'Secondary'} title={'Interactive Project Map'} />

      <section id="about-us">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">

          <div className="pb-4 pt-20">
            {/*<h3 className="text-3xl">Explore grant projects</h3>*/}
            <p>Use the interactive map to explore and learn more about the different School Based Mental Health (SBMH) and Mental Health Service Professional (MHSP) grant funded projects around the United States.</p>
            <Button variant="link" className="mt-8 p-4 w-full border border-gray-200 border-x-0 flex justify-between">
              <div>
                <strong><a>Helpful tips to explore and search for particular projects</a></strong>
              </div>
              <div>
                <strong>＋</strong>
              </div>
            </Button>
            <div className="border border-gray-200 border-t-0 block" id="helpful-tips">
              <ul className="py-4 list-disc ml-10 mr-12">
                <li className="pb-2">
                  Colored dots represent different grant types:<br/>
                  <strong className="pl-4">MHSP:</strong> Mental Health Services Professional<br/>
                  <strong className="pl-4">SBMH:</strong> School-Based Mental Health
                </li>
                <li className="pb-2"><strong>Filter by grant type:</strong> Use the checkboxes on the right of the map to filter projects by grant type.</li>
                <li className="pb-2"><strong>Search for a location:</strong> Move your mouse over the map and select the 🔍 icon located in the top left corner of the map. Type the city and/or state you are interested in exploring, and press &quot;enter&quot;. To return to the full map, select the 🏠 icon located in the top left corner of the map.</li>
                <li><strong>View project details:</strong> Move your mouse over any of the colored dots on the map to &quot;view details&quot; about a particular project; ie. city, grant number, grantee name, etc.</li>
              </ul>
            </div>
          </div>
          
          <iframe src="https://public.tableau.com/views/MHSPSBMH_Locations_By_State_Phase_2/Map_Dashboard?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link:showVizHome=no&:embed=true"
 width="100%" height="955"></iframe>

        </div>
      </section>
    </>
  );
}