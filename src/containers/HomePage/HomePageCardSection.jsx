import HomePageCard from "./HomePageCard";

export default function HomePageCardSection(){
  return(
    <section className="w-full py-16 lg:py-32 bg-secondary text-white">
      <div 
        className="ui-wrapper flex flex-col lg:flex-row justify-between mx-auto"
        data-wrapper="md"
      >
        <div className="lg:w-5/12 flex flex-col my-auto">
          <h2 
            className="ui-heading ui-separator text-white text-left md:mb-20"
            data-separator="left"
            data-heading="lg"
          >
            Lorem ipsum dolor sit amet
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Phasellus rhoncus. Aliquam
            ante. Aliquam erat volutpat. Suspendisse nisl.
            Integer pellentesque quam vel velit. Etiam
            neque. Fusce tellus. Nunc dapibus tortor vel mi
            dapibus soetus. Pellentesque habitant morbi
            tristique senectus et netus e
          </p>
        </div>
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 my-5">
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
            linkHref="sem.tam.cz"
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
            linkHref="sem.tam.cz"
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
            linkHref="sem.tam.cz"
          />
        </div>
      </div>
    </section>
  );
}