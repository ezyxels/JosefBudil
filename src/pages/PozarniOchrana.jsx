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
        title="Revize, požární ochrana, BOZP a další | Revizák Pino Plzeň"
        description="Meta description...."
        keywords="Awesome, Keywords, Goes, Here"
      />

      <Hero
        title="Požární ochrana"
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
          title="V oblasti dokumentace PO pro Vás rád připravím:" 
          listArray={[
            "dokumentaci o začlenění do kategorie činností se zvýšeným požárním nebezpečím nebo s vysokým požárním nebezpečím,",
            "posouzení požárního nebezpečí, včetně projednání a schválení HZS",
            "stanovení organizace zabezpečení požární ochrany,",
            "požární řád,",
            "požární poplachové směrnice,",
            "požární evakuační plán,",
            "dokumentace zdolávání požárů, včetně projednání a schválení HZS",
            "řád ohlašovny požárů,",
            "tematický  plán  a  časový  rozvrh  školení  zaměstnanců  a odborné přípravy preventivních požárních hlídek a preventistů požární ochrany,",
            "dokumentace  o  provedeném  školení  zaměstnanců a odborné přípravě preventivních požárních hlídek a preventistů požární ochrany,",
            "požární kniha,",
            "dokumentace  o  činnosti a akceschopnosti jednotky požární ochrany, popřípadě požární hlídky"
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
