import { StaticImage } from "gatsby-plugin-image";
import Button from "components/ui/Button"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import SlideUp from "components/scroll-reveal-animations/SlideUp";

import HeroPanel from "./HeroPanel";

export default function Hero() {
  return (
    <header className="flex flex-col relative w-screen h-screen min-h-[512px]" role="banner">
      <StaticImage 
        src="../../Assets/images/hero-bg.jpg"
        alt="obrázek pozadí"
        className="w-full h-full -z-1 absolute"
        objectFit="cover"
        loading="eager"
        formats={["avif","webp", "jpeg", "png"]}
      />
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-30"></div>
      <div
        className="ui-wrapper m-auto flex flex-col justify-center items-center text-white"
        data-wrapper="sm"
      >
        <SlideUp
          as="span"
          className="ui-heading self-center text-center lg:text-2xl mb-4 mt-20 sm:mt-0 text-white"
          data-heading="md"
          >
          Bezpečák pino - plzeň
        </SlideUp>
        <SlideUp
          as="h1"
          className="ui-heading w-full text-center text-white text-3xl lg:text-6xl"
          data-heading="lg"
        >
          REVIZE bez starostí
        </SlideUp>
        <SlideUp
          as="div"
          className="flex flex-col"
        >
          <p className="ui-lead my-3 self-center text-center text-white">
          Nabízíme kompletní služby v oblasti bezpečnosti práce a požární ochrany s působností v celém Plzeňském kraji. Naše služby nabízejí poradenství, konzultace a veškerý související servis. 
          Bedlivě hlídáme aktuálnost všech zákonů a nařízení České republiky a souvisejících zákonů z Evropské unie. Za provedenou práci přebíráme plnou zodpovědnost .
 
          </p>
          <Button 
            as="button"
            className="mx-auto sm:translate-y-12"
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
      <HeroPanel />
    </header>
  );
}