import LogoHolder from "containers/LogoHolder";

import logo1 from "Assets/svg/brand.svg"

export default function HomePageLogoPanel(){
  return(
    <section className="py-3 md:py-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 items-center bg-gray-200">
    <LogoHolder logoSrc={logo1} />
    <LogoHolder logoSrc={logo1} />
    <LogoHolder logoSrc={logo1} />
    <LogoHolder logoSrc={logo1} />
    <LogoHolder logoSrc={logo1} />
    <LogoHolder logoSrc={logo1} />
    <LogoHolder logoSrc={logo1} />
  </section>
    
  );
}