import { StaticImage } from "gatsby-plugin-image";
import Button from "components/ui/Button"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { SlideUp } from "components/scroll-reveal-animations";

import HomePageHeroPanel from "./HomePageHeroPanel";

export default function HomePageHero() {
  return (
    <header className="flex flex-col relative w-screen h-screen min-h-[512px]" role="banner">
      <StaticImage 
        src="../../Assets/images/hero-bg.jpg"
        alt="obrázek pozadí"
        className="w-full h-full -z-1 absolute"
        objectFit="cover"
        loading="eager"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-30"></div>
      <div
        className="ui-wrapper m-auto flex flex-col justify-center items-center text-white"
        data-wrapper="sm"
      >
        <SlideUp
          as="span"
          className="ui-heading self-center text-center lg:text-2xl mb-2 text-white"
          data-heading="md"
          >
          LOREM IPSUM DOLOR
        </SlideUp>
        <SlideUp
          as="h1"
          className="ui-heading w-full text-center text-white text-3xl lg:text-6xl"
          data-heading="lg"
        >
          LOREM IPSUM DOLOR
        </SlideUp>
        <SlideUp
          as="div"
          className="flex flex-col"
        >
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
        </SlideUp>
      </div>
      <HomePageHeroPanel />
    </header>
  );
}