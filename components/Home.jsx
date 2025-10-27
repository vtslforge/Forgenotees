import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import add from "../src/assets/add.png";

const Home = () => {
  const [notesContent, setnotesContent] = useState("second asdf");
  const [noteContent, setnoteContent] = useState("Start writing your note..");

  return (
    <div className="bg-background h-screen w-screen">
      <div className="h-1/3 w-1/3  z-20 border-2 border-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-3 flex flex-col gap-3 ">
        <h1 className="poppins-regular text-2xl">Title</h1>
        <input className="poppins-regular focus:outline-none h-1/10" type="text" placeholder="Enter Title"></input>
        <h1 className="poppins-regular text-2xl">Note Content</h1>
        <textarea className="poppins-regular h-full flex flex-row focus:outline-none" type="text" placeholder={noteContent}></textarea>
        <button className="border-2 border-foreground p-2 rounded-2xl h-10 w-15 right-0 absolute -bottom-15 flex justify-center items-center poppins-regular">Add</button>    
      </div>
      
      <Navbar />

      <div>
        <h1 className="text-2xl my-3 mx-10 poppins-regular opacity-90">
          Your Notes
        </h1>
      </div>

      {/* Notes boxes */}

      <div className="notesContainer h-3/4 mx-10 pt-5 flex gap-3">
        <div className="min-h-2/10 max-h-fit w-2/10 border border-foreground rounded-2xl p-2">
          {notesContent}
        </div>
      </div>

      {/* notes boxes ends */}

      <button className="bottom-20 z-20 absolute right-30 h-15 w-15 rounded-full bg-foreground cursor-pointer flex justify-center items-center">
        <p className="h-15 w-15 flex items-center justify-center">
          <img className="opacity-65" src={add}></img>
        </p>
      </button>
    </div>
  );
};

export default Home;
