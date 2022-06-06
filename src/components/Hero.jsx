import PropTypes from "prop-types";

export default function Hero({ title }) {
  return (
    <header className="w-screen h-96 lg:h-screen bg-gradient-to-b from-secondary to-black" role="banner">
      <div
        className="ui-wrapper h-full flex flex-col justify-center items-center text-white"
        data-wrapper="sm"
      >
        <h1 className="ui-heading uppercase w-full text-center text-white text-3xl sm:text-5xl lg:text-6xl">
          {title}
        </h1>
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
