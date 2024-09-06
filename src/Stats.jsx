/* eslint-disable react/prop-types */
export default function Stats() {
  return (
    <section className="stats">
      <Stat lable={"Words"} num={"0"} />
      <Stat lable={"Characters"} num={"0"} />
      <Stat lable={"Instagram"} num={"280"} />
      <Stat lable={"FaceBook"} num={"2200"} />
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
