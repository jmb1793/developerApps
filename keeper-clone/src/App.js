import Header from "./UI/Header";
import Footer from "./UI/Footer";
import Notes from "./UI/Notes";
import "./App.css";
import NoteAdd from "./components/noteAdd";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, idx) => {
        return idx !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <NoteAdd onAdd={addNote} />
      <div className="notes">
        {notes.map((noteItem,idx) => {
          return (
            <Notes
              key={idx}
              id={idx}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
