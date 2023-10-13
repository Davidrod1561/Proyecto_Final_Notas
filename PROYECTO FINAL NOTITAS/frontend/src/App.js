import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  useEffect(() => {
    fetch('/api/notes')
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  const handleNoteChange = (event) => {
    const { name, value } = event.target;
    setNewNote({ ...newNote, [name]: value });
  };

  const handleNoteSubmit = (event) => {
    event.preventDefault();

    fetch('/api/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
      .then((response) => response.json())
      .then((data) => {
        setNotes([...notes, data]);
        setNewNote({ title: '', content: '' });
      });
  };

  return (
    <div className="App">
      <h1>Notas</h1>
      <form onSubmit={handleNoteSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={newNote.title}
          onChange={handleNoteChange}
        />
        <textarea
          name="content"
          placeholder="Contenido"
          value={newNote.content}
          onChange={handleNoteChange}
        />
        <button type="submit">Guardar Nota</button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
