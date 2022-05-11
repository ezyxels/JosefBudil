// Layout
import AppLayout from "layouts/AppLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import HomePageHero from "containers/HomePage/HomePageHero";
import HomePageCardSection from "containers/HomePage/HomePageCardSection";
import HomePageLogoPanel from "containers/HomePage/HomePageLogoPanel";
import HomePageWhyUs from "containers/HomePage/HomePageWhyUs";
import HomePageContactSection from "containers/HomePage/HomePageContactSection";

export default function IndexPage() {
  return (
    <AppLayout>
      <Seo
        title="Hlavní stránka"
        description="Starter se základními knihovnamy, komponenty a kódem pro rychlý a produktivní vývoj nového projektu."
        keywords="react, javascript, css framework, user interface"
      />

      <HomePageHero />
      <HomePageWhyUs />
      <HomePageLogoPanel />
      <HomePageCardSection />
      <HomePageContactSection />
    </AppLayout>
  );
}
