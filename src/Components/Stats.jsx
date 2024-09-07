/* eslint-disable react/prop-types */
export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat lable={"Words"} num={stats.countWords} />
      <Stat lable={"Characters"} num={stats.numofChar} />
      <Stat lable={"Instagram"} num={stats.instaCharLeft} />
      <Stat lable={"FaceBook"} num={stats.facebookCharLeft} />
    </section>
  );
}

function Stat({ lable, num }) {
  return (
    <section className="stat">
      <span className={`stat__number ${num < 0 ? "stat__number--limit" : ""}`}>
        {num}
      </span>
      <h2 className="second-heading">{lable}</h2>
    </section>
  );
}
