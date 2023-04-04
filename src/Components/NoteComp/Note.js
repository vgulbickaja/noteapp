import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function Note({ text, deleteNote, id }) {
  return (
    <div className="note">
      <div className="noteBody">{text}</div>
      <div className="noteFooter" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          className="noteDelete"
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon>
      </div>
    </div>
  );
}
export default Note;
