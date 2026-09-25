import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DashboardStats from "./components/DashboardStats";
import AIInsights from "./components/AIInsights";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <DashboardStats />
        <AIInsights />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;