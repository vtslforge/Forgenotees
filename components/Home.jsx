import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import add from "../src/assets/add.png";

const Home = () => {
  const [notesContent, setnotesContent] = useState("second asdf");

  return (
    
    <div className="bg-background h-screen w-screen">
      <div className="h-100 w-100 z-20 border-2 border-amber-300 absolute translate-x-100 translate-y-100"></div> 
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
