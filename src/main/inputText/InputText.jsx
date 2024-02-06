import "./inputText.css";
import { useState } from "react";

const InputText = () => {
    let [text, setText] = useState("Search for places...")

  return (
    <>
      <div class="coolinput">
        <label for="input" class="text">
          Places:
        </label>
        <input
          type="text"
          placeholder= {text}
          name="input"
          class="input"
          onChange={(ev) => setText(text = ev.target.value)}
        />
      </div>
    </>
  );
};

export default InputText;
