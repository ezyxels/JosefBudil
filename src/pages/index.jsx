// Layout
import AppLayout from "layouts/AppLayout";

// Global Components
import Seo from "components/Seo";

// Page Components
import Hero from "containers/HomePage/Hero";
import CardSection from "containers/HomePage/CardSection";
import LogoPanel from "containers/HomePage/LogoPanel";
import WhyUs from "containers/HomePage/WhyUs";
import ContactSection from "containers/HomePage/ContactSection";

export default function IndexPage() {
  return (
    <AppLayout>
      <Seo
        title="Revize, požární ochrana, BOZP a další"
        description="Kompletní služby v oblasti bezpečnosti práce, požární ochrany revizí elektrických zařízení a koordinace na staveništi s působností v celém Plzeňském kraji."
        keywords="revize elektro plzen, bozp plzen, pozarni ochrana plzen, revize plzen"
      />

      <Hero />
      <WhyUs />
      <LogoPanel />
      <CardSection />
      <ContactSection />
    </AppLayout>
  );
}
