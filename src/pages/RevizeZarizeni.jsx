// Layout
import AppLayout from "layouts/AppLayout";

// Global components
import Seo from "components/Seo";
import Hero from "components/Hero";
import Button from "components/ui/Button";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import TitleAndList from "containers/Services/TitleAndList";
import TitleAndText from "containers/Services/TitleAndText";

export default function NewPage() {
  return (
    <AppLayout>
      <Seo
        title="Revize elektrických zařízení, spotřebičů a nářadí"
        description="Revize elektrických zařízení, spotřebičů a ručního nářadí"
        keywords="revize, nářadí, elektronika, spotřebiče, elektrické zařízení"
      />

      <Hero
        title="Revize elektrických zařízení"
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
        <TitleAndText
          text1="Smyslem provádění revizí elektrických zařízení je zjistit celkový stav těchto zařízení, 
          upozornit na případná rizika a navrhnout řešení s ohledem na bezpečnost a zdraví osob a majetku. 
          Povinnost provozovatele zajistit revize elektrických spotřebičů, elektrického ručního nářadí a 
          elektrického zařízení vyplývá ze Zákoníku práce."
        />
        <TitleAndList 
          title="Prováděním revizí můžeme zabránit:" 
          ulHeadingBold={true}
          listArray={[
            "možnému poškození zdraví a majetku vadným spotřebičem,",
            "vysokým postihům za nedodržení předpisů pro řízení a zajišťování bezpečnosti práce,",
            "krácením pojistného plnění (v případě škodné události může pojišťovna žádat o doložení splnění všech zákonných podmínek)",
            "vzniku požáru (omezit riziko)"
          ]}
        />
        <section className="py-2">
          <p className="font-bold">Nabídka revizí:</p>
          <p>Revize elektrických zařízení a hromosvodů do 1000 V v objektech třídy A+B podle ČSN 33 1500 a ČSN EN 60079-17:</p>
          <ul className="list-disc list-outside pl-7">
            <li>průmyslové objekty,</li>
            <li>průmyslové objekty s nebezpečím výbuchu,</li>
            <li>bytové objekty,</li>
            <li>zdravotnická zařízení,</li>
            <li>administrativní prostory,</li>
            <li>školky, školy a další.</li>
          </ul>
        </section>
        <TitleAndList 
          title="Revize spotřebičů:"
          ulHeadingBold={true}
          listArray={[
            "elektrické přístroje informační techniky (počítače, kopírky apod.),",
            "elektrické spotřebiče pro domácnost (lednice, pračky, vařiče, konvice apod.),",
            "přístroje spotřební elektroniky (radiopřijímače, televizory, magnetofony apod.),",
            "ostatní elektrické spotřebiče podobného charakteru."
          ]}
        />
        <TitleAndList 
          title="Revize ručního nářadí:"
          ulHeadingBold={true}
          listArray={[
            "vrtačky, brusky, kotoučové pily,",
            "šroubováky, pájky, leštičky, vrtací kladiva,",
            "sekačky a další"
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
