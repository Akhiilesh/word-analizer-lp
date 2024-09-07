/* eslint-disable react/prop-types */
export default function Stats({
  numofChar,
  instaCharLeft,
  facebookCharLeft,
  countWords
}) {
  return (
    <section className="stats">
      <Stat lable={"Words"} num={countWords} />
      <Stat lable={"Characters"} num={numofChar} />
      <Stat lable={"Instagram"} num={instaCharLeft} />
      <Stat lable={"FaceBook"} num={facebookCharLeft} />
    </section>
  );
}

function Stat({ lable, num }) {
  return (
    <section className="stat">
      <span className="stat__number">{num}</span>
      <h2 className="second-heading">{lable}</h2>
    </section>
  );
}
