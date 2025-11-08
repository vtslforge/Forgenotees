import React, { useState, useEffect } from "react";
import add from "../src/assets/add.png";
import SelectedNote from "./SelectedNote";

const Home = () => {
  const [Notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(Notes));
  }, [Notes]);

  function handleChangeNote(e) {
    setTitle(e.target.value);
  }

  function handleChangeDesc(e) {
    setDesc(e.target.value);
  }

  function handleAddNote() {
    const newNote = { title: Title, descritipion: Desc };
    setNotes([...Notes, newNote]);
    setTitle("");
    setDesc("");
    setShowPopup(false);
  }

  function handleDelete(index) {
    setNotes(Notes.filter((_, i) => i !== index));
  }

  return (
    <div className="bg-background h-screen w-screen overflow-y-scroll scrollbar-hide">
      {/* selected note popup */}
      <SelectedNote selectedNote={selectedNote} onClose={() => setSelectedNote(null)} />
      <h1 className="text-2xl my-6 mx-10 poppins-regular opacity-90">Your Notes</h1>

      {/* note list */}
      <div className="h-auto w-full pb-9">
        <div className="grid grid-cols-4 pl-9 pr-9 gap-3">
          {Notes.map((note, index) => (
            <div key={index} className="h-full w-full p-3 bg-foreground rounded-2xl cursor-pointer">
              <p className="truncate w-full">{note.title}</p>
              <p className="truncate w-full">{note.descritipion}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => setSelectedNote(note)}>Open</button>
            </div>
          ))}
        </div>
      </div>

      {/* add note popup */}
      {showPopup && (
        <div className="fixed z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 bg-white p-6 rounded-xl shadow-lg">
          <input
            className="border p-2 rounded"
            type="text"
            placeholder="Title"
            value={Title}
            onChange={handleChangeNote}
          />
          <textarea
            className="border p-2 rounded"
            placeholder="Description"
            value={Desc}
            onChange={handleChangeDesc}
          />
          <button
            onClick={handleAddNote}
            className="border p-2 rounded bg-gray-200 hover:bg-gray-300">
            Add
          </button>
        </div>
      )}

      {/* floating add button */}
      <button
        onClick={() => setShowPopup(!showPopup)}
        className="h-15 w-15 rounded-full border bg-foreground cursor-pointer flex justify-center items-center fixed right-30 bottom-20">
        <img className="opacity-65" src={add} />
      </button>
    </div>
  );
};

export default Home;
