export default function TitleAndText({ title, text1, text2 }){
  return(
    <section 
        className="ui-wrapper py-20"
        data-wrapper="sm"
        >
        <h2
          className="ui-heading"
          data-heading="md"
        >
          {title}
        </h2>
        <p>
          {text1}
        </p>
        <br/>
        <p>
          {text2}
        </p>
      </section>
  );
}