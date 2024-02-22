import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact } from "./component/Contact";
//import { Experience } from "./component/Experience";
import Navbar from "./component/Navbar";
import { Skills } from "./component/Skills";
import { Projects } from "./component/Projects";
import { Resume } from "./component/Resume";
import Exp from "./component/Exp";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/about" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Exp />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
