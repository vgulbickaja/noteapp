import { React } from "react";
function Create() {
  return (
    <div className="note" style={{ background: "rgba(255, 255, 255, 0)" }}>
      <textarea
        cols="10"
        rows="5"
        placeholder="Type...."
        maxLength="100"
      ></textarea>
      <div className="noteFooter">
        <span className="label"> left</span>
        <button className="noteSave">Save</button>
      </div>
    </div>
  );
}

export default Create;
