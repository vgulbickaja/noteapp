import { React, useState, useEffect } from "react";
import "../Styles/Note.css";
import Note from "./Note";
import Create from "./Create";
import { v4 as uuid } from "uuid";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (event) => {
    setInputText(event.target.value);
  };

  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);

    setInputText("");
  };

  return (
    <div className="notes">
      <Note />
      <Create />
    </div>
  );
}
export default Notes;
