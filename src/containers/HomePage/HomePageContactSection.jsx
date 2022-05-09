import globalSettings from "settings/globalSettings";
import { mainRoutes, callToAction } from "settings/navLinks";

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
  return(
    <section 
      className="ui-wrapper py-32 text-center grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-around"
      data-wrapper="md"
      >
      <div className="mb-5 flex flex-col text-left">
        <h3 
          className="ui-heading ui-separator text-black"
          data-separator="left"
          data-heading="md"
        >
          Lorem ipsum
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Phasellus rhoncus. Aliquam
          ante. Aliquam erat volutpat. Suspendisse
          nisl. Integer pellentesque quam vel velit.
        </p>
      </div>
      <div className="md:w-4/5 mt-auto md:ml-auto flex flex-col text-left text-primary">
        <div className="my-1 flex flex-row justify-between">
          <p className="ui-link text-xl self-center lg:inline-flex">
           {callToAction[0].label}
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={callToAction[0].link}
              data-link="4"
            >
              <FaPhone className="w-8 p-1 bg-orange-300 rounded-full rotate-90"/>
            </a>
            <button
              onClick={() =>  navigator.clipboard.writeText(callToAction[0].label)}
            >
              <FaCopy className="w-8 p-1 bg-orange-300 rounded-full"/>
            </button>
          </div>
        </div>
        <div className="my-1 flex flex-row justify-between">
          <p className="ui-link text-xl self-center lg:inline-flex">{callToAction[1].label}</p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={callToAction[1].link}
              data-link="4"
            >
              <HiMail className="w-8 p-1 bg-orange-300 rounded-full"/>
            </a>
            <button
              onClick={() =>  navigator.clipboard.writeText(callToAction[1].label)}
            >
            <FaCopy className="w-8 p-1 bg-orange-300 rounded-full"/>
            </button>
          </div>
        </div>
        <div className="my-1 flex flex-row justify-between">
          <p  className="ui-link text-xl self-center lg:inline-flex">
            {globalSettings.client.adress}
          </p>
          <div className="grid grid-cols-2 gap-3">
            <a
              href={globalSettings.client.adress}
              data-link="4"
            >
              <FaLocationArrow className="w-8 p-1 bg-orange-300 rounded-full"/>
            </a>
            <button
              onClick={() =>  navigator.clipboard.writeText(globalSettings.client.adress)}
            >
              <FaCopy className="w-8 p-1 bg-orange-300 rounded-full"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}