// Settings
import globalSettings from "settings/globalSettings";

// Global components
import Link from "components/ui/Link";

// Tightly coupled components
import FooterRevealMark from "./FooterRevealMark";

export default function Footer() {
  return (
    <footer className="footer w-screen border-t border-default border-opacity-20 bg-gray-950 text-white">
      <div
        className="ui-wrapper flex flex-col py-10 lg:py-16 items-center justify-between text-center sm:flex-row"
        data-wrapper="lg"
      >
        <div className="flex flex-col text-left">
          <p className="mb-8">{globalSettings.client.fullName}</p>
          <p>IČ: {globalSettings.client.ico}</p>
          <p>Tel: {globalSettings.client.phone}</p>
          <p>Email: {globalSettings.client.email}</p>
          <p>{globalSettings.client.adress}</p>
          <span className="block lg:mr-auto mt-10">
            Copyright © {new Date().getFullYear()} {globalSettings.meta.shortUrl}
          </span>
        </div>
        <div className="flex flex-col md:flex-row mt-5 md:mt-auto">
          <ul className="list-none flex flex-col md:mr-10">
            <li className="self-center mt-auto mb-auto">
              <Link
                to="/cookies"
                className="ui-link font-normal"
                data-link="2"
              >
                Cookies
              </Link>
            </li>
          </ul>
          <FooterRevealMark />
        </div>
      </div>
    </footer>
  );
}
