export default function TitleAndText({ title, text1, text2 }){
  return(
    <section className="py-2">
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
        <b>
          {text2}
        </b>
      </section>
  );
}