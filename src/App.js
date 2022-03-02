import React from "react";
import "./App.css";

import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import Projects from "./components/projects.js";
import Contact from "./components/contact.js";

export default function App() {
  return (
      <main className="text-gray-400 bg-gray-900 body-font">
        <Navbar />
        <About />
        <Projects />
        <Contact />
      </main>
  );
}

