import { StaticImage } from "gatsby-plugin-image";
import Button from "components/ui/Button"
import { AnchorLink } from "gatsby-plugin-anchor-links";

import HomePageHeroPanel from "./HomePageHeroPanel";

export default function HomePageHero() {
  return (
    <header className="relative" role="banner">
      <StaticImage 
        src="../../Assets/images/hero-bg.jpg"
        alt="obrázek pozadí"
        className="w-screen h-screen -z-1"
        objectFit="cover"
        loading="eager"
      />
      <div
        className="ui-wrapper absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center text-white"
        data-wrapper="sm"
      >
        <span 
          className="ui-heading self-center text-center lg:text-2xl mb-2 text-white"
          data-heading="md"
          >
          LOREM IPSUM DOLOR
        </span>
        <h1 
          className="ui-heading w-full text-center text-white text-3xl lg:text-6xl"
          data-heading="lg"
        >
          LOREM IPSUM DOLOR
        </h1>
        <div className="flex flex-col-reverse md:flex-col">
          <p className="ui-lead my-3 self-center text-center text-white">
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
            <AnchorLink
              to="/#onas"
              title="ZJISTIT VÍCE"
            />
          </Button>
        </div>
      </div>
      <HomePageHeroPanel />
    </header>
  );
}