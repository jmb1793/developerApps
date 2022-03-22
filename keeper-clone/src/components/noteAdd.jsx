import { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import "./Note.css";

function NoteAdd(props) {
  //note.title, note.content
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div className="note-add">
      <form className="note-form" onSubmit={submitNote}>
        <input
          type="text"
          className="note-input title-input"
          placeholder="Title"
          name="title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          className="note-input content-input"
          name="content"
          value={note.content}
          rows="3"
          placeholder="Take a note..."
          onChange={handleChange}
        />
        <Zoom in={true}>
          <Fab className="fab-button" type="submit" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default NoteAdd;
