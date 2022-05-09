import propTypes from "prop-types";

export default function HomePageCard({number, linkText, linkHref, title, text }) {
  return (
    <div
      className="my-2 p-3 md:p-10 flex flex-col space-y-6 text-white border-2 border-white relative col-span-1"
    >
      <div className="bg-secondary p-3 self-start flex items-center justify-center text-2xl absolute top-0 left-5 -translate-y-1/2 text-primary font-semibold">
        {number}
      </div>
      <h2 className="ui-heading text-white" data-heading="md">
        {title}
      </h2>
      <p>{text}</p>
      <a
        href={linkHref}
        className="ui-link text-xl text-primary lg:inline-flex"
        data-link="4"
      >{linkText}</a>
    </div>
  );
}

HomePageCard.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired
};
