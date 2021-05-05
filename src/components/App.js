import React from "react"
import About from "./About";
import BlogContainer from "./BlogContainer";
import Landing from "./Landing";
import Projects from "./Projects"
import Skills from "./Skills";

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Skills/>
      <Projects/>
      <BlogContainer/>
    </div>
  );
}

export default App;
