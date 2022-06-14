import { StaticImage } from "gatsby-plugin-image";
import SlideUp from "components/scroll-reveal-animations/SlideUp";

export default function WhyUs(){
  return(
  <section
      id="onas"
      className="ui-wrapper mt-128 sm:mt-72 md:mt-28 py-20 md:py-40 text-center flex flex-col items-center justify-center"
      data-wrapper="md"
    >
      <SlideUp
        as="h2"
        className="ui-heading ui-separator text-secondary mb-20"
        data-separator="center"
        data-heading="lg"
      >
          Proč si vybrat nás?
        </SlideUp>
      <SlideUp 
        as="div"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between"
      >
        <StaticImage 
          src="../../Assets/images/why-us.jpeg"
          alt="Bezpečnost práce"
          loading="lazy"
          formats={["avif","webp", "jpeg", "png"]}
        />
        <p className="lg:p-8 m-auto text-left">
        Nabízíme komplexní služby v oblasti BOZP a PO (bezpečnosti práce a požární ochrany) s působností v Plzeňském kraji. Naše služby zahrnují poradenství a konzultace a veškerý související servis. 
        Nabízíme více jak 9 letou zkušenost, což je určitou zárukou a garancí kvality poskytovaných služeb. Máme zkušenosti jak s malými, tak velkými mezinárodními korporacemi. Bedlivě hlídáme aktuálnost všech zákonů a nařízení České republiky a souvisejících zákonů z Evropské unie. Za provedenou práci přebíráme plnou zodpovědnost.
        <br></br><br></br>
        <b>Naší prioritou je Vaše spokojenost!</b>
        </p>
      </SlideUp>
    </section>
  );
}