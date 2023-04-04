import { React, useState, useEffect } from "react";
import "../Styles/Note.css";
import Note from "./Note";
import Create from "./Create";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  return (
    <div className="notes">
      <Note />
      <Create />
    </div>
  );
}
export default Notes;
