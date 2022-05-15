import globalSettings from "settings/globalSettings";
import { callToAction } from "settings/navLinks";
import CopyAlert from "components/CopyAlert";
import useClipboard from "react-use-clipboard";
import { SlideUp } from "components/scroll-reveal-animations";


//  Icons
import{
  FaPhone,
  FaLocationArrow,
  FaCopy
} from "react-icons/fa";
import{
  HiMail
} from "react-icons/hi";

export default function HomePageContactSection(){
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
      className="ui-wrapper py-20 lg:py-40 text-center grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-around"
      data-wrapper="md"
      >
      <div className="mb-5 flex flex-col text-left">
        <SlideUp
          as="h2"
          className="ui-heading ui-separator text-black"
          data-separator="left"
          data-heading="md"
        >
          Lorem ipsum
        </SlideUp>
        <SlideUp as="p">
          Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Phasellus rhoncus. Aliquam
          ante. Aliquam erat volutpat. Suspendisse
          nisl. Integer pellentesque quam vel velit.
        </SlideUp>
      </div>
      <SlideUp
        as="div"
        className="md:w-4/5 mt-auto md:ml-auto flex flex-col text-left text-primary"
      >
        <div className="my-2 flex flex-row justify-between">
          <p className="my-auto text-xl font-medium">
           {callToAction[0].label}
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={callToAction[0].link}
              className="self-center"
            >
              <FaPhone className="w-10 p-2 bg-orange-300 rounded-full rotate-90"/>
            </a>
            <button
              onClick={setCopyPhone}
            >
              <FaCopy className="w-10 p-2 bg-orange-300 rounded-full"/>
            </button>
          </div>
        </div>
        <div className="my-2 flex flex-row justify-between">
          <p className="my-auto text-xl font-medium">{callToAction[1].label}</p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={callToAction[1].link}
              className="self-center"
            >
              <HiMail className="w-10 p-2 bg-orange-300 rounded-full"/>
            </a>
            <button
              onClick={setCopyMail}
            >
            <FaCopy className="w-10 p-2 bg-orange-300 rounded-full"/>
            </button>
          </div>
        </div>
        <div className="my-2 flex flex-row justify-between">
          <p  className="my-auto text-xl font-medium">
            {globalSettings.client.adress}
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={globalSettings.client.googleAdress}
              target="_blank"
              rel="noreferrer"
              className="self-center"
            >
              <FaLocationArrow className="w-10 p-2 bg-orange-300 rounded-full"/>
            </a>
            <button
              onClick={setCopyAdress}
            >
              <FaCopy className="w-10 p-2 bg-orange-300 rounded-full"/>
            </button>

          </div>
        </div>
      </SlideUp>
      <CopyAlert className={(copyPhone || copyMail || copyAdress) ? "opacity-100" : "opacity-0"}/>
    </section>
  );
}