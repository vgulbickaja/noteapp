import React from "react";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
function Note() {
  return (
    <div className="note">
      <div className="noteBody"></div>
      <div className="noteFooter" style={{ justifyContent: "flex-end" }}>
        <DeleteForeverOutlinedIcon
          className="noteDelete"
          aria-hidden="true"
        ></DeleteForeverOutlinedIcon>
      </div>
    </div>
  );
}
export default Note;
