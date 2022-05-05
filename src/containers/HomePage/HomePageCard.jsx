import propTypes from "prop-types";

export default function HomePageCard({number, linkHolder, linkHref, title, text, className }) {
  return (
    <div
      className={`p-10 flex flex-col space-y-6 text-white border-2 border-white relative ${className}`}
    >
      <div className="bg-sky-900 p-3 self-start flex items-center justify-center text-2xl absolute top-0 left-5 -translate-y-1/2 text-orange-500">
        {number}
      </div>
      <h2 className="ui-heading text-white" data-heading="md">
        {title}
      </h2>
      <p>{text}</p>
      <a
        href={linkHref}
        className="ui-link text-xl text-primary hidden lg:inline-flex"
        data-link="4"
      >{linkHolder}</a>
    </div>
  );
}

HomePageCard.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  className: propTypes.string,
};
