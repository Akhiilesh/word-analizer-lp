import { useState } from "react";
import Warning from "./Warning";

function TextArea() {
  const [text, setText] = useState("");
  const [warning, setWarning] = useState(false);
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;
    if (newText.includes("<script>")) {
      setWarningText("No <script> Tag Allowed!");
      setWarning(true);
      newText = newText.replace("<script>", "");
    } else if (newText.includes("@")) {
      setWarningText("No @ Symbol Allowed!");
      setWarning(true);
      newText = newText.replace("@", "");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text..."
        spellCheck="false"
      />
      {warning ? <Warning warningText={warningText} /> : null}
    </div>
  );
}

export default TextArea;
