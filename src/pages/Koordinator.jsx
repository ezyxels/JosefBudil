import AppLayout from "layouts/AppLayout";

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
        title="Koordinátor na staveništi"
        description="Koordinátor na staveništi"
        keywords="koordinátor, bozp"
      />

      <Hero
        title="Koordinátor na staveništi"
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
        <p>Zajistíme výkon funkce koordinátora BOZP na staveništi podle zákona č. 309/2006 Sb., o zajištění dalších podmínek bezpečnosti a ochrany zdraví při práci.</p>
        <TitleAndList 
          title="Kdy musí být na staveništi určen koordinátor:" 
          listArray={[
            "v případech, kdy budou na staveništi působit současně zaměstnanci více než jednoho zhotovitele stavby,",
            "celková předpokládaná doba trvání prací a činností je delší než 30 pracovních dnů, ve kterých budou vykonávány práce a činnosti a bude na nich pracovat současně více než 20 fyzických osob po dobu delší než 1 pracovní den,",
            "celkový plánovaný objem prací a činností během realizace díla přesáhne 500 pracovních dnů v přepočtu na jednu fyzickou osobu",
           ]}
        />
        <br></br>
        <TitleAndText 
          title="Dále je zadavatel stavby povinen:"
          text1="určit potřebný počet koordinátorů bezpečnosti a ochrany zdraví při práci na staveništi s přihlédnutím k rozsahu a složitosti díla a jeho náročnosti na koordinaci ve fázi přípravy a ve fázi jeho realizace (činnosti koordinátora při přípravě díla a při jeho realizaci mohou být vykonávány toutéž osobou; určí-li zadavatel stavby více koordinátorů, kteří působí při přípravě nebo realizaci stavby současně, vymezí pravidla jejich vzájemné spolupráce).
          "
          text2="Koordinátor nemůže být totožný s osobou, která odborně vede realizaci stavby!"
        />
        <p 
          className="ui-heading pt-12"
          data-heading="sm"
        >
          Činnost koordinátora:
        </p>
        <TitleAndList 
          title="V přípravné fázi stavby koordinátor BOZP:" 
          ulHeadingBold={true}
          listArray={[
            "spolupracuje s projektantem při tvorbě projektové dokumentace,",
            "zpracuje plán bezpečnosti práce, který je povinnou součástí dokumentace ke stavebnímu povolení, a to v písemné a grafické podobě se všemi nutnými a potřebnými požadavky a jednotlivými pracovními postupy při realizaci,",
            "navrhne vhodná opatření BOZP,",
            "zpracuje přehled právních předpisů vztahujících se ke stavbě,",
            "zpracuje přehled rizik, která se mohou při realizaci stavby vyskytnout, se zřetelem na práce a činnosti vystavující fyzickou osobu zvýšenému ohrožení života nebo poškození zdraví s ohledem na charakter stavby a její realizaci,",
            "zpracuje a předá projektantovi, zhotoviteli stavby, pokud byl již určen, popřípadě jiné osobě veškeré další informace o bezpečnostních a zdravotních rizicích, která jsou mu známa a která se dotýkají jejich činnosti,",
            "dává podněty a doporučuje technická řešení nebo organizační opatření, která jsou z hlediska zajištění bezpečného a zdraví neohrožujícího pracovního prostředí a podmínek výkonu práce vhodná pro plánování jednotlivých prací,",
            "poskytuje odborné konzultace a doporučení týkající se požadavků na zajištění bezpečné a zdraví neohrožující práce, odhadu délky času potřebného pro provedení plánovaných prací nebo činností se zřetelem na specifická opatření, ",
            "pracovní nebo technologické postupy a procesy a potřebnou organizaci prací v průběhu realizace,",
            "zabezpečuje, aby plán přiměřeně povaze a rozsahu stavby a místním a provozním podmínkám staveniště obsahoval údaje, informace a postupy zpracované v podrobnostech nezbytných pro zajištění bezpečné a zdraví neohrožující práce,",
            "zajistí zpracování požadavků na bezpečnost a ochranu zdraví při práci při udržovacích pracích."
           ]}
        />
        <TitleAndList
          title="Ve fázi realizace koordinátor BOZP:"
          ulHeadingBold={true}
          listArray={[
            "ohlašuje zahájení stavebních prací inspektorátu práce, vyžaduje-li si to rozsah stavby, vypracuje náležitosti ohlášení,",
            "koordinuje spolupráci zhotovitelů nebo osob jimi pověřených při přijímání opatření k zajištění bezpečnosti a ochrany zdraví při práci se zřetelem na povahu stavby a na všeobecné zásady prevence rizik a činnosti prováděné na staveništi současně popřípadě v těsné návaznosti, s cílem chránit zdraví fyzických osob, zabraňovat pracovním úrazům a předcházet vzniku nemocí z povolání,",
            "dohlíží na dodržování daných zásad postupů zhotovování stavby,",
            "spolupracuje při stanovení času potřebného k bezpečnému provádění jednotlivých prací nebo činností,",
            "informuje všechny dotčené zhotovitele stavby o bezpečnostních a zdravotních rizicích, která vznikla na staveništi během postupu prací,",
            "upozorňuje zhotovitele stavby na nedostatky v uplatňování požadavků na bezpečnost a ochranu zdraví při práci zjištěné na pracovišti převzatém zhotovitelem stavby a vyžaduje zjednání nápravy,",
            "provádí zápisy do stavebního deníku o zjištěných nedostatcích včetně návrhu nápravných opatření a termínu náprav a dohlíží na jejich splnění,",
            "sleduje a kontroluje, zda zhotovitelé dodržují plán BOZP a projednává s nimi přijetí opatření a termíny k nápravě zjištěných nedostatků, případně upravuje plán BOZP dle skutečnosti,",
            "sleduje provádění prací na staveništi se zaměřením na zjišťování, zda jsou dodržovány požadavky na bezpečnost a ochranu zdraví při práci, upozorňuje na zjištěné nedostatky a požaduje bez zbytečného odkladu zjednání nápravy,",
            "kontroluje zabezpečení obvodu staveniště, včetně vstupu a vjezdu na staveniště, s cílem zamezit vstup nepovolaným fyzickým osobám,",
            "dává podněty a na vyžádání zhotovitele doporučuje technická řešení nebo opatření k zajištění bezpečnosti a ochrany zdraví při práci pro stanovení pracovních nebo technologických postupů a plánování bezpečného provádění prací, které se s ohledem na věcné a časové vazby při realizaci stavby uskuteční současně nebo na sebe budou bezprostředně navazovat, spolupracuje při stanovení času potřebného k bezpečnému provádění jednotlivých prací nebo činností,",
            "zúčastní se kontrolní prohlídky stavby, k níž byl stavebník přizván stavebním úřadem,",
            "zúčastní se kontrolních dnů k dodržování plánu za účasti zhotovitelů.",
          ]}
        />
        <b>Koordinátor pro zadavatele stavby zajišťuje koordinaci bezpečnosti práce a ochrany zdraví na staveništi od fáze přípravy až do realizace stavby, naplňuje jeho zákonnou povinnost podle požadavků zákona č. 309/2006 Sb. a tím Vás chrání před sankcemi plynoucími z tohoto zákona.</b>
        
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
