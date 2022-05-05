import propTypes from "prop-types";

export default function Sluzba({ linkHolder, linkHref, title, text, className }) {
  return (
    <div className={className}>
      <div className="w-3/4 mx-auto">
        <h4
          className="ui-heading text-sky-900"
        >
          {title}
        </h4>
        <p>
          {text}
        </p>
      </div>
    </div>
  );
}

Sluzba.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  className: propTypes.string,
};
