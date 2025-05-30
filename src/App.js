import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  return (
    <main className="text-cyan-500 bg-primary body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
