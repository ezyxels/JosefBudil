import PropTypes from "prop-types";

export default function LogoHolder({ className = "", logoSrc }) {
  return (
    <div className={`w-24 h-10 mx-auto ${className}`}>
      <img
        src={logoSrc}
        alt="Logo značky"
        width="96"
        height="40"
        className="w-full h-full dark:invert"
      />
    </div>
  );
}

LogoHolder.propTypes = {
  className: PropTypes.string,
};