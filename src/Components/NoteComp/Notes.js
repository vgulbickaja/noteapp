import { React, useState, useEffect } from "react";
import "../Styles/Note.css";
import Note from "./Note";
function Notes() {
  return (
    <div className="notes">
      <Note />
    </div>
  );
}
export default Notes;
