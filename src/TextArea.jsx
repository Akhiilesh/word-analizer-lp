import { useState } from "react";
import Warning from "./Warning";

function TextArea() {
  const [text, setText] = useState("");
  const [warningText, setWarningText] = useState("");

  const numberOfChar = text.length;

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningText("No <script> Tag Allowed!");
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ Symbol Allowed!");
      newText = newText.replace("@", "");
    } else {
      setWarningText("");
    }
    setText(newText);
    console.log(numberOfChar);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text..."
        spellCheck="false"
      />
      <Warning warningText={warningText} />
    </div>
  );
}

export default TextArea;
