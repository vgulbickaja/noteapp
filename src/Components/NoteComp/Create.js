import { React } from "react";
function Create({ textHandler, saveHandler, inputText }) {
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type...."
        onChange={textHandler}
        maxLength="100"
      ></textarea>
      <div className="noteFooter">
        <span className="label"> left</span>
        <button className="noteSave" onCklick={saveHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Create;
