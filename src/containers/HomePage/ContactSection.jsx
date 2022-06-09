import globalSettings from "settings/globalSettings";
import { callToAction } from "settings/navLinks";
import CopyAlert from "components/CopyAlert";
import useClipboard from "react-use-clipboard";
import SlideUp from "components/scroll-reveal-animations/SlideUp";


//  Icons
import{
  FaLocationArrow,
  FaCopy
} from "react-icons/fa";
import{
  HiMail,
  HiPhone,

} from "react-icons/hi";

export default function ContactSection(){
  const [copyPhone, setCopyPhone] = useClipboard(globalSettings.client.phone, {
    successDuration: 2500,
  });
  const [copyMail, setCopyMail] = useClipboard(globalSettings.client.email, {
    successDuration: 2500,
  });
  const [copyAdress, setCopyAdress] = useClipboard(globalSettings.client.adress, {
    successDuration: 2500,
  });
  return(
    <section 
      id="kontakt"
      className="ui-wrapper py-20 lg:py-40 text-center flex flex-col md:flex-row items-center justify-between"
      data-wrapper="md"
      >
      <div className="mb-5 flex flex-col text-left md:max-w-[85%] md:mr-5">
        <SlideUp
          as="h2"
          className="ui-heading ui-separator text-black"
          data-separator="left"
          data-heading="md"
        >
          Kontaktní informace
        </SlideUp>
        <SlideUp as="p">
          V případě zájmu o naše služby nás neváhejte kontaktovat. 
          Rádi Vám poradime nebo zoodpovíme jakékoliv otázky. 
        </SlideUp>
      </div>
      <SlideUp
        as="div"
        className="md:w-4/5 mt-auto md:ml-auto flex flex-col text-left text-primary w-full"
      >
        <div className="my-2 flex flex-row justify-between">
          <p className="my-auto text-xl font-medium">
           {callToAction[0].label}
          </p>
          <div className="grid grid-cols-2 gap-3 items-center min-w-[90px]">
            <a
              href={callToAction[0].link}
              className="self-center"
            >
            <div className="w-10 h-10 flex justify-center items-center bg-orange-300 rounded-full">
              <HiPhone className="w-7/12 h-7/12"/>
            </div>
            </a>
            <button
              className="w-10 h-10 flex justify-center items-center bg-orange-300 rounded-full"
              onClick={setCopyPhone}
            >
              <FaCopy className="w-6/12 h-6/12"/>
            </button>
          </div>
        </div>
        <div className="my-2 flex flex-row justify-between">
          <p className="my-auto text-xl font-medium">{callToAction[1].label}</p>
          <div className="grid grid-cols-2 gap-3 items-center min-w-[90px]">
            <a
              href={callToAction[1].link}
              className="self-center"
            >
            <div className="w-10 h-10 flex justify-center items-center bg-orange-300 rounded-full">
              <HiMail className="w-7/12 h-7/12"/>
            </div>
            </a>
            <button
              className="w-10 h-10 flex justify-center items-center bg-orange-300 rounded-full"
              onClick={setCopyMail}
            >
              <FaCopy className="w-6/12 h-6/12"/>
            </button>
          </div>
        </div>
        <div className="my-2 flex flex-row justify-between">
          <p  className="my-auto text-xl font-medium mr-4">
            {globalSettings.client.adress}
          </p>
          <div className="grid grid-cols-2 gap-3 items-center min-w-[90px]">
            <a
              href={globalSettings.client.googleAdress}
              target="_blank"
              rel="noreferrer"
              className="self-center"
            >
            <div className="w-10 h-10 flex justify-center items-center bg-orange-300 rounded-full">
              <FaLocationArrow className="w-6/12 h-6/12"/>
            </div>
            </a>
            <button
              className="w-10 h-10 flex justify-center items-center bg-orange-300 rounded-full"
              onClick={setCopyAdress}
            >
              <FaCopy className="w-6/12 h-6/12"/>
            </button>

          </div>
        </div>
      </SlideUp>
      <CopyAlert className={(copyPhone || copyMail || copyAdress) ? "opacity-100" : "opacity-0"}/>
    </section>
  );
}