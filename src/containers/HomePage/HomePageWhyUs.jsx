import { StaticImage } from "gatsby-plugin-image";

export default function HomePageWhyUs(){
  return(
  <section 
      className="ui-wrapper py-32 md:pt-52 text-center flex flex-col items-center justify-center"
      data-wrapper="md"
    >
      <h3 
        className="ui-heading ui-separator text-secondary"
        data-separator="center"
        data-heading="lg"
      >
          Proč si vybrat nás?
        </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
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
      </div>
    </section>
  );
}