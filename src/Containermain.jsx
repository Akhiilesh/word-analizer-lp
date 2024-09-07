import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Containermain() {
  const [text, setText] = useState("");
  const numofChar = text.length;
  const instaCharLeft = 280 - text.length;
  const facebookCharLeft = 2200 - text.length;
  const countWords = text.split(/\s/).filter((word) => word !== "").length;

  const stats = {
    numofChar: numofChar,
    instaCharLeft: instaCharLeft,
    facebookCharLeft: facebookCharLeft,
    countWords: countWords
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
