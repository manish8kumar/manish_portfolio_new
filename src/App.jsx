import { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection/Hero.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/Education/Education.jsx";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails.jsx";
import './App.css'

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <>
      <Router>
        <Navbar />
        <div className={`min-h-screen  text-gray-100 bg-bg overflow-x-hidden`}>
          <HeroSection />
          <div className="wrapper-gradient w-full clip-path-custom">
            <Skills />
            <Experience />
          </div>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <div className="wrapper-gradient w-full clip-path-custom">
            <Education />
            <Contact />
          </div>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </div>
       
      </Router>
    </>
  );
}

export default App;
