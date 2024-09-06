/* eslint-disable react/prop-types */
export default function Stats() {
  return (
    <section className="stats">
      <Stat lable={"Words"} />
      <Stat lable={"Characters"} />
      <Stat lable={"Instagram"} num={"280"} />
      <Stat lable={"FaceBook"} num={"2200"} />
    </section>
  );
}

function Stat({ lable, num = 0 }) {
  return (
    <section className="stat">
      <span className="stat__number">{num}</span>
      <h2 className="second-heading">{lable}</h2>
    </section>
  );
}
