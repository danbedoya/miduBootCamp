import React from "react";
import Note from "./components/Note";
import Posts from "./components/Posts";
import { useState } from "react";

const App4 = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newNoteToAdd = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    setNotes([...notes, newNoteToAdd]);
    setNewNote("");
  };

  const handleShowAll = (event) => {
    setShowAll(() => !showAll);
  };
  return (
    <div>
      <ol>
        <h1>Notes</h1>
        <button onClick={handleShowAll}>
          {showAll ? "Show only important" : "Show All"}
        </button>
        {notes
          .filter((note) => {
            return showAll ? note : note.important;
          })
          .map((note) => (
            <Note
              key={note.id}
              content={note.content}
              date={note.date}
              categories={note.categories}
            />
          ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote}></input>
        <button>Crear Nota</button>
      </form>
    </div>
  );
};

export default App4;
