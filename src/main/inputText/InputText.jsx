import "./inputText.css";
import { useState } from "react";

const InputText = () => {
    let [text, setText] = useState("Search for places...")

    setText = (ev) => {
      text = ev.target.value
    }

  return (
    <>
      <div className="coolinput">
        <label htmlFor="input" className="text">
          Places:
        </label>
        <input
          type="text"
          placeholder= {text}
          name="input"
          className="input"
          onChange={setText}
        />
      </div>
    </>
  );
};

export default InputText;
