// Settings
import globalSettings from "settings/globalSettings";

// Tightly coupled components
import FooterRevealMark from "./FooterRevealMark";

export default function Footer() {
  return (
    <footer className="footer w-screen border-t border-default border-opacity-20 bg-gray-950 text-white">
      <div
        className="ui-wrapper flex flex-col py-10 lg:py-16 items-center justify-between text-center sm:flex-row"
        data-wrapper="lg"
      >
        <div className="flex flex-col sm:text-left">
          <p className="mb-8">{globalSettings.client.fullName}</p>
          <p>IČ: {globalSettings.client.ico}</p>
          <p>Tel: {globalSettings.client.phone}</p>
          <p>Email: {globalSettings.client.email}</p>
          <p>{globalSettings.client.adress}</p>
          <span className="block lg:mr-auto mt-10">
            Copyright © {new Date().getFullYear()} {globalSettings.meta.shortUrl}
          </span>
        </div>
        <div className="mt-8 sm:mt-auto">
          <FooterRevealMark />
        </div>
      </div>
    </footer>
  );
}
