import React, { useState } from "react"
import About from "./About";
import BlogContainer from "./BlogContainer";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Projects from "./Projects"
import Skills from "./Skills";

function App() {

  
  
  return (
    <div className="App">
      <Landing/>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <BlogContainer/> 
    </div>
  );
}

export default App;
