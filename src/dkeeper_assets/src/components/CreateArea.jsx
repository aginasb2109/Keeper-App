import React, { useState } from "react";
import { Zoom } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

function CreateArea(props) {
  const [expanded, setExpanded] = useState(false);

  const [notes, setNotes] = useState({
    title: "",
    content: "",
  });

  function onHandle(event) {
    const { name, value } = event.target;
    setNotes((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function HandleAllChange(event) {
    event.preventDefault();
    props.addnote(notes);
    setNotes({ title: "", content: "" });
  }

  function handleArea() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {expanded && (
          <input
            name="title"
            placeholder="Title"
            value={notes.title}
            onChange={onHandle}
          />
        )}
        <textarea
          name="content"
          onClick={handleArea}
          placeholder="Take a note..."
          rows={expanded ? 3 : 1}
          value={notes.content}
          onChange={onHandle}
        />
        <Zoom in={expanded}>
          <Fab onClick={HandleAllChange}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
