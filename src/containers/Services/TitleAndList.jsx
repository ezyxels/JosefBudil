export default function TitleAndList({ title, listArray, ulHeadingBold }){
  return(
    <section className="py-2">
        <p className={`${ulHeadingBold ? "font-bold" : null}`}>
          {title}
        </p>
        <ul className="list-disc list-outside pl-7">
          {listArray.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </ul>
      </section>
  );
}