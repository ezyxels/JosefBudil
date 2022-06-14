import AppLayout from "layouts/AppLayout";

import Seo from "components/Seo";
import Hero from "components/Hero";
import Button from "components/ui/Button";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import TitleAndList from "containers/Services/TitleAndList";

export default function NewPage() {
  return (
    <AppLayout>
      <Seo
        title="Bezpečnost Práce"
        description="Bezpečnost práce a ochrana zdraví při práci"
        keywords="bezpečnost práce, pracovní rizika, bozp"
      />

      <Hero
        title="Bezpečnost a ochrana zdraví při práci"
      />
      <div 
        className="ui-wrapper flex flex-col py-48"
        data-wrapper="sm"
      >
        <h2 
          className="uppercase ui-heading"
          data-heading="lg"
        >
          co nabízíme?
        </h2>
        <TitleAndList 
          title="V oblasti dokumentace BOZP pro vás rád připravím:" 
          listArray={[
            "systém hodnocení a registr rizik",
            "registr právních předpisů",
            "kategorizaci prací",
            "směrnici o lékařských prohlídkách",
            "systém a doklady pro školení zaměstnanců",
            "směrnici pro zajištění BOZP",
            "směrnici na vydávání a používání osobních ochranných pracovních prostředků",
            "směrnici o pracovních úrazech",
            "směrnice určující seznam prací a pracovišť zakázaných ženám a mladistvým",
            "místní provozně bezpečnostní předpis dopravy (DPŘ)",
            "místní provozně bezpečnostní předpis skladování",
            "traumatologický plán (plán první pomoci)",
            "harmonogramy revizí, kontrol a prohlídek",
          ]}
        />
        <AnchorLink
          to="/#kontakt"
          className="block my-20 mx-auto"
        >
          <Button 
            as="button"
            shape="pill"
            color="primary"
            size="sm"
            children="OBJEDNAT SLUŽBU"
          />
        </AnchorLink>
      </div>
    </AppLayout>
  );
}