import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 text-white scroll-smooth">
      <Navbar
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />

      <div className="container mx-auto px-4 md:px-6 py-20 space-y-20 md:space-y-32">
        <section id="home" className="scroll-mt-20">
          <Home setActiveSection={setActiveSection} />
        </section>

        <section id="about" className="scroll-mt-20">
          <About setActiveSection={setActiveSection} />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section id="services" className="scroll-mt-20">
          <Services />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
