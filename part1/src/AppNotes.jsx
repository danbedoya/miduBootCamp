import React, { useEffect } from "react";
import Note from "./components/Note";
import Posts from "./components/Posts";
import { useState } from "react";
import axios from "axios";
import { getAllNotes } from "./services/notes/getAllNotes";

const AppNotes = () => {
  const [notes, setNotes] = useState([]);
  console.log("🚀 ~ file: AppNotes.jsx:10 ~ AppNotes ~ notes:", notes);
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    getAllNotes().then((notes) => {
      console.log("promise fulfilled", notes);
      setNotes(notes);
    });
  }, []);

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
              content={note.title}
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

export default AppNotes;
