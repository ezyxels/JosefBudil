import { StaticImage } from "gatsby-plugin-image";
import Button from "components/ui/Button"

import HomePageHeroPanel from "./HomePageHeroPanel";

export default function HomePageHero() {
  return (
    <header className="w-screen relative" role="banner">
      <StaticImage 
        src="../../Assets/images/hero-bg.jpg"
        alt="hero background"
        className="-z-1"
      />
      <div
        className="ui-wrapper relative md:absolute -top-20 md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2 flex flex-col justify-center items-center text-white"
        data-wrapper="sm"
      >
        <h2 className="ui-heading self-center text-center lg:text-2xl mb-2 text-white">
          LOREM IPSUM DOLOR
        </h2>
        <h1 className="ui-heading w-full text-center text-white text-3xl lg:text-6xl">
          LOREM IPSUM DOLOR
        </h1>
        <div className="flex flex-col-reverse md:flex-col">
          <p className="ui-lead my-3 self-center text-center text-black md:text-white">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus rhoncus. Aliquam ante. Aliquam erat volutpat.
            Suspendisse nisl. Integer pellentesque quam vel velit. Etiam
            neque. Fusce tellus. 
          </p>
          <Button 
            as="button"
            className="mx-auto"
            shape="pill"
            color="primary"
            size="sm"
          >
            ZJISTIT VÍCE
          </Button>
        </div>
      </div>
      <HomePageHeroPanel />
    </header>
  );
}