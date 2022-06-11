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
      <div className="w-full h-1/2 absolute translate-y-1/2 flex flex-col justify-center items-center text-white">
        <SlideUp
          as="span"
          className="ui-heading font-medium tracking-widest uppercase self-center text-center mb-4 mt-20 sm:mt-0 text-white"
          data-heading="sm"
          >
          Bezpečák pino - plzeň
        </SlideUp>
        <SlideUp
          as="h1"
          className="ui-heading uppercase w-full text-center text-white text-3xl lg:text-6xl"
          data-heading="lg"
        >
          Revize bez starostí
        </SlideUp>
        <SlideUp
          as="div"
          className="flex flex-col"
        >
          <p className="ui-lead my-3 self-center text-center leading-7 md:leading-8 text-white">
          Nabízíme kompletní služby v oblasti bezpečnosti práce a požární ochrany s působností v celém Plzeňském kraji. Naše služby nabízejí poradenství, konzultace a veškerý související servis. 
          Bedlivě hlídáme aktuálnost všech zákonů a nařízení České republiky a souvisejících zákonů z Evropské unie. Za provedenou práci přebíráme plnou zodpovědnost.
          </p>
          <AnchorLink
              to="/#onas"
              className="mx-auto sm:translate-y-12"
          >
            <Button 
              as="button"
              shape="pill"
              color="primary"
              size="sm"
              children="ZJISTIT VÍCE"
            />
          </AnchorLink>
        </SlideUp>
      </div>
      <HeroPanel />
    </header>
  );
}