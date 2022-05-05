import PropTypes from "prop-types";

import Button from "components/ui/Button"

export default function Hero({ title, subtitle, aboveTitle, hasButton, background }) {
  return (
    <header className="w-screen h-screen relative" role="banner">
      <img src={background} className="absolute w-full h-full -z-10 blur-sm"></img>
      <div
        className="ui-wrapper h-full flex flex-col justify-center items-center text-white"
        data-wrapper="sm"
      >
        {aboveTitle != ""}
        <h2 className="ui-heading self-center text-center text-2xl mb-2 text-white">
          {aboveTitle}
        </h2>
        <h1 className="ui-heading w-full text-center text-white text-3xl sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="ui-lead self-center text-center mb-20">{subtitle}</p>
        {hasButton ? (
        <Button 
          as="button"
          className="rounded-full bg-warning"
          shape="pill"
          color="warning"
        >
          ZJISTIT VÍCE
        </Button>
        ) : ( null )
      }
      </div>
    </header>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  aboveTitle: PropTypes.string,
  hasButton: PropTypes.bool,
};
