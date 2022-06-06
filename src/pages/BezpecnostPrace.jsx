import AppLayout from "layouts/AppLayout";

import Seo from "components/Seo";
import Hero from "components/Hero";
import Button from "components/ui/Button";
import TitleAndList from "components/TitleAndList";
import { AnchorLink } from "gatsby-plugin-anchor-links";

export default function NewPage() {
  return (
    <AppLayout>
      <Seo
        title="Revize, požární ochrana, BOZP a další | Revizák Pino Plzeň"
        description="Meta description...."
        keywords="Awesome, Keywords, Goes, Here"
      />

      <Hero
        title="Bezpečnost a ochrana zdraví při práci"
      />
      <div 
        className="ui-wrapper py-48"
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
        <Button 
          as="button"
          className="left-1/2 -translate-x-1/2 translate-y-20 mb-20"
          shape="pill"
          color="primary"
          size="sm"
        >
          <AnchorLink
            to="/#kontakt"
            title="OBJEDNAT SLUŽBU"
          />
        </Button>
      </div>
    </AppLayout>
  );
}