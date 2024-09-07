import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS
} from "../lib/constants";

export default function Containermain() {
  const [text, setText] = useState("");

  const stats = {
    numofChar: text.length,
    instaCharLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    facebookCharLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    countWords: text.split(/\s/).filter((word) => word !== "").length
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
