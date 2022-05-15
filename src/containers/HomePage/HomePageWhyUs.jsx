import { StaticImage } from "gatsby-plugin-image";
import { SlideUp } from "components/scroll-reveal-animations";

export default function HomePageWhyUs(){
  return(
  <section
      id="onas"
      className="ui-wrapper mt-96 xs:mt-72 md:mt-20 py-20 md:py-40 text-center flex flex-col items-center justify-center"
      data-wrapper="md"
    >
      <SlideUp
        as="h3"
        className="ui-heading ui-separator text-secondary mb-20"
        data-separator="center"
        data-heading="lg"
      >
          Proč si vybrat nás?
        </SlideUp>
      <SlideUp 
        as="div"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between"
      >
        <StaticImage 
          src="../../Assets/images/why-us.jpeg"
          alt="..."
        />
        <p className="p-8 m-auto text-left">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Phasellus rhoncus. Aliquam ante. Aliquam erat volutpat.
          Suspendisse nisl. Integer pellentesque quam vel velit. Etiam
          neque. Fusce tellus. Nunc dapibus tortor vel mi dapibus
          soetus. Pellentesque habitant morbi tristique senectus et
          netus et Lorem ipsum dolor sit amet, consectetuer adipiscing
          elit. Phasellus rhoncus. Aliquam ante. Aliquam erat 
        </p>
      </SlideUp>
    </section>
  );
}