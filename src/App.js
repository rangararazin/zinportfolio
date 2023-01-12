import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./component/Contact";
import { Experience } from "./component/Experience";
import Navbar from "./component/Navbar";

import { Projects } from "./component/Projects";
import { Resume } from "./component/Resume";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/about" element={<Resume />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
