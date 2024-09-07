import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Containermain() {
  const [text, setText] = useState("");
  const numofChar = text.length;

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats numofChar={numofChar} />
    </main>
  );
}
