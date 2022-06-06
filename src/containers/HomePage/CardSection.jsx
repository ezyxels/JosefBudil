import Card from "./Card";
import SlideUp from "components/scroll-reveal-animations/SlideUp";

export default function CardSection(){
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
            Služby
          </SlideUp>
          <SlideUp as="p">
            Nabízíme kompletní servis v oblasti požární bezpečnosti staveb.
            Specializujeme se na kontroly a montáže hasicích přístrojů, 
            hydrantů, požárních ucpávek, protipožárních nátěrů a požárních 
            klapek. Zajišťujeme školení o požární bezpečnosti a zpracování 
            dokumentace požární ochrany. Dále poskytujeme služby 
            koordinátora BOZP na staveništi a osoby odborně způsobilé v 
            prevenci rizik.
          </SlideUp>
        </div>
        <div className="xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5 my-5">
          <Card
            number="1"
            title="Revize"
            text="Kontroly (revize) a opravy požárně bezpečnostních zařízení (PBZ). 
                  Kontroly provozuschopnosti hasicích přístrojů. Tlakové zkoušky hasicích přístrojů.
                  A mnoho dalšího."
            linkText="VÍCE INFORMACÍ"
            linkHref="RevizeZarizeni"
          />

          <Card
            number="2"
            title="Koordinátor na staveništi"
            text="Poskytování služeb koordinátora dle 309/2006 Sb."
            linkText="VÍCE INFORMACÍ"
            linkHref="Koordinator"
          />

          <Card
            number="3"
            title="Požární ochrana"
            text="Kompletní zajištění povinností právnických i fyzických osob podle
               zákona o PO osobou odborně  způsobilou. 
               Zpracování dokumentace začlenění provozních čiností. 
               A mnoho dalšího."
            linkText="VÍCE INFORMACÍ"
            linkHref="PozarniOchrana"
          />

          <Card
            number="4"
            title="Bezpečnost práce"
            text="Kompletní zajištění povinností právnických osob vyplývajících ze zákoníku práce:
            vyhledávání rizik a prevence rizik, včetně zpracování dokumentace a další."
            linkText="VÍCE INFORMACÍ"
            linkHref="BezpecnostPrace"
          />
        </div>
      </div>
    </section>
  );
}