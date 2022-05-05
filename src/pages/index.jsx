// Layout
import AppLayout from "layouts/AppLayout";

// Global Components
import Seo from "components/Seo";
import Hero from "components/Hero";

// Logos
import logo1 from "Assets/svg/brand.svg"

import LogoHolder from "containers/LogoHolder";

// OBRÁZKY
import prvni from "Assets/images/prvni.jpeg";
import heroBG from "Assets/images/hero-bg.jpeg"

import globalSettings from "settings/globalSettings";

import { mainRoutes, callToAction } from "settings/navLinks";

// Page Components
import HomePageCard from "containers/HomePage/HomePageCard";
import Sluzba from "containers/HomePage/Sluzba";

// Icons
import {
  HiMoon,
  HiLightningBolt,
  HiPuzzle,
  HiFire,
  HiEye,
  HiHand,
} from "react-icons/hi";
import { FocusTrap } from "@headlessui/react";

export default function IndexPage() {
  return (
    <AppLayout>
      <Seo
        title="Hlavní stránka"
        description="Starter se základními knihovnamy, komponenty a kódem pro rychlý a produktivní vývoj nového projektu."
        keywords="react, javascript, css framework, user interface"
      />

      <Hero
        title="LOREM IPSUM DOLOR"
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Phasellus rhoncus. Aliquam ante. Aliquam erat volutpat.
        Suspendisse nisl. Integer pellentesque quam vel velit. Etiam
        neque. Fusce tellus. "
        aboveTitle="LOREM IPSUM DOLOR"
        background={heroBG}
        hasButton={true}
      />
      <section
        className="ui-wrapper w-2/3 py-10 text-center flex flex-row relative -translate-y-1/2 bg-white shadow-2xl justify-around"
        data-wrapper="md"
      >
        <Sluzba 
          title="LOREM IPSUM"
          text="lorem ipsum dolor sit 
                amet, consectetuer 
                adipiscing elit."
        />
        
        <Sluzba 
          title="LOREM IPSUM"
          text="lorem ipsum dolor sit 
                amet, consectetuer 
                adipiscing elit."
        />
        
        <Sluzba 
          title="LOREM IPSUM"
          text="lorem ipsum dolor sit 
                amet, consectetuer 
                adipiscing elit."
          className="border-solid border-r-2 border-black"
        />
        
        <Sluzba 
          title="LOREM IPSUM"
          text="lorem ipsum dolor sit 
                amet, consectetuer 
                adipiscing elit."
        />
      </section>
      <section 
        className="ui-wrapper py-32 lg:py-16 text-center flex flex-col items-center justify-center"
        data-wrapper="md"
      >
        <h3 
          className="ui-heading ui-separator text-sky-900"
          data-separator="center"
          data-heading="lg"
        >
            Proč si vybrat nás?
          </h3>
        <div className="flex flex-row justify-between">
          <img 
            src={prvni}
            className="w-1/3 object-contain"
            />
          <p className="w-1/3 p-8 text-left">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Phasellus rhoncus. Aliquam ante. Aliquam erat volutpat.
            Suspendisse nisl. Integer pellentesque quam vel velit. Etiam
            neque. Fusce tellus. Nunc dapibus tortor vel mi dapibus
            soetus. Pellentesque habitant morbi tristique senectus et
            netus et Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit. Phasellus rhoncus. Aliquam ante. Aliquam erat 
          </p>
        </div>
      </section>
      <section className="grid grid-cols-7 py-24 items-center bg-gray-200">
        <LogoHolder logoSrc={logo1} />
        <LogoHolder logoSrc={logo1} />
        <LogoHolder logoSrc={logo1} />
        <LogoHolder logoSrc={logo1} />
        <LogoHolder logoSrc={logo1} />
        <LogoHolder logoSrc={logo1} />
        <LogoHolder logoSrc={logo1} />
      </section>
      <section 
        className="ui-wrapper w-full py-32 bg-sky-900 text-white"
        data-wrapper="md"
        >
        <div className="flex flex-row justify-around w-3/4 mx-auto">
          <div className="flex flex-col w-1/4 my-auto">
            <h2 
              className="ui-heading ui-separator text-white text-left mb-20"
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
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-1/2">
            <HomePageCard
              className="col-span-1"
              number="1"
              title="První služba"
              text="Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. .
                    Aliquam Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. .
                    Aliquam."
              linkHolder="VÍCE INFORMACÍ"
              linkHref="sem.tam.cz"
            />

            <HomePageCard
              className="col-span-1"
              number="2"
              title="Druhá služba"
              text="Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. .
                    Aliquam Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. .
                    Aliquam."
              linkHolder="VÍCE INFORMACÍ"
              linkHref="sem.tam.cz"
            />

            <HomePageCard
              className="col-span-1" 
              number="3"
              title="Třetí služba"
              text="Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. .
                    Aliquam Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. .
                    Aliquam."
              linkHolder="VÍCE INFORMACÍ"
              linkHref="sem.tam.cz"
            />

            <HomePageCard
              className="col-span-1"
              number="4"
              title="Čtvrtá služba"
              text="Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. .
                    Aliquam Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit. .
                    Aliquam."
              linkHolder="VÍCE INFORMACÍ"
              linkHref="sem.tam.cz"
            />
          </div>
        </div>
      </section>
      <section 
        className="ui-wrapper py-32 mx-auto text-center flex flex-row items-center justify-around"
        data-wrapper="lg"
        >
          <div className="flex flex-col w-1/6 text-left">
            <h3 
              className="ui-heading ui-separator text-black"
              data-separator="left"
              data-heading="md"
            >
              Lorem ipsum
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Phasellus rhoncus. Aliquam
              ante. Aliquam erat volutpat. Suspendisse
              nisl. Integer pellentesque quam vel velit.
            </p>
          </div>
          <ul className="list-none text-left">
            <li>
              <a
                href={callToAction[0].link}
                className="ui-link text-xl text-primary self-center hidden lg:inline-flex"
                data-link="4"
              >
                {callToAction[0].label}
              </a>
            </li>
            <li>
              <a
                href={callToAction[1].link}
                className="ui-link text-xl text-primary self-center hidden lg:inline-flex"
                data-link="4"
              >
                {callToAction[1].label}
              </a>
            </li>
            <li>
              <a
                href={globalSettings.client.adress}
                className="ui-link text-xl text-primary self-center hidden lg:inline-flex"
                data-link="4"
              >
                {globalSettings.client.adress}
              </a>
            </li>
          </ul>
        </section>
    </AppLayout>
  );
}
