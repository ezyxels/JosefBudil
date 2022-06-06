import propTypes from "prop-types";
import SlideUp from "components/scroll-reveal-animations/SlideUp";

export default function Card({number, linkText, linkHref, title, text }) {
  return (
    <SlideUp
      as="div"
      className={`my-6 md:my-2 p-3 md:p-10 flex flex-col space-y-6 text-white border-2 border-white relative col-span-1 ${(number == 2 || number == 4) ? "sm:delay-350" : null}`} 
    >
      <div className="bg-secondary p-3 self-start flex items-center justify-center text-2xl absolute top-0 left-5 -translate-y-1/2 text-primary font-semibold">
        {number}
      </div>
      <h2 className="ui-heading text-white" data-heading="md">
        {title}
      </h2>
      <p className="pb-3">{text}</p>
      <a
        href={linkHref}
        className="ui-link text-xl text-primary lg:inline-flex !mt-auto"
        data-link="4"
      >{linkText}</a>
    </SlideUp>
  );
}

Card.propTypes = {
  title: propTypes.string.isRequired,
  text: propTypes.string.isRequired
};
