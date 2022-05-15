import HomePageCard from "./HomePageCard";
import { SlideUp } from "components/scroll-reveal-animations";

export default function HomePageCardSection(){
  return(
    <section
      id="sluzby"
      className="w-full py-20 lg:py-40 bg-secondary text-white">
      <div 
        className="ui-wrapper flex flex-col xl:flex-row justify-between mx-auto"
        data-wrapper="md"
      >
        <div className="xl:w-5/12 flex flex-col mb-14 xl:my-auto">
          <SlideUp
            as="h2"
            className="ui-heading ui-separator text-white text-left mb-8"
            data-separator="left"
            data-heading="lg"
          >
            Lorem ipsum dolor sit amet
          </SlideUp>
          <SlideUp as="p">
            Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Phasellus rhoncus. Aliquam
            ante. Aliquam erat volutpat. Suspendisse nisl.
            Integer pellentesque quam vel velit. Etiam
            neque. Fusce tellus. Nunc dapibus tortor vel mi
            dapibus soetus. Pellentesque habitant morbi
            tristique senectus et netus e
          </SlideUp>
        </div>
        <div className="xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5 my-5">
          <HomePageCard
            number="1"
            title="První služba"
            text="Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. .
                  Aliquam Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. .
                  Aliquam."
            linkText="VÍCE INFORMACÍ"
            linkHref="new-page"
          />

          <HomePageCard
            number="2"
            title="Druhá služba"
            text="Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. .
                  Aliquam Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. .
                  Aliquam."
            linkText="VÍCE INFORMACÍ"
            linkHref=""
          />

          <HomePageCard
            number="3"
            title="Třetí služba"
            text="Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. .
                  Aliquam Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. .
                  Aliquam."
            linkText="VÍCE INFORMACÍ"
            linkHref=""
          />

          <HomePageCard
            number="4"
            title="Čtvrtá služba"
            text="Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. .
                  Aliquam Lorem ipsum dolor sit amet,
                  consectetuer adipiscing elit. .
                  Aliquam."
            linkText="VÍCE INFORMACÍ"
            linkHref=""
          />
        </div>
      </div>
    </section>
  );
}