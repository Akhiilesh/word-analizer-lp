import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Containermain() {
  const [text, setText] = useState("");

  const stats = {
    numofChar: text.length,
    instaCharLeft: 280 - text.length,
    facebookCharLeft: 2200 - text.length,
    countWords: text.split(/\s/).filter((word) => word !== "").length
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
