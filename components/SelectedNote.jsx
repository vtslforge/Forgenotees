import React from "react";

const SelectedNote = ({ selectedNote, onClose }) => {
  if (!selectedNote) return null;

  return (
    <div className="fixed z-40 flex justify-center h-screen w-screen items-center bg-black/50">
      <div className="bg-white p-6 h-full w-full rounded-2xl">
        <h2 className="text-xl font-semibold">{selectedNote.title}</h2>
        <p className="mt-3">{selectedNote.descritipion}</p>
        <button
          onClick={onClose}
          className="mt-5 border px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SelectedNote;
