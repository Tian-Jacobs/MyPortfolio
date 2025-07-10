
import { useEffect } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/sections/About";
import WorkSamples from "@/components/sections/WorkSamples";
import Resume from "@/components/sections/Resume";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Accomplishments from "@/components/sections/Accomplishments";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import TianChatbot from "@/components/TianChatbot";
import Squares from "@/components/Squares";

const Index = () => {
  // Scroll to the section if the URL contains a hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated squares background for home/hero section */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', height: '100vh' }}>
        <Squares
          direction="right"
          speed={0.5}
          borderColor="#334155"
          squareSize={40}
          hoverFillColor="#1e293b"
          className="home-squares-bg"
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <About />
        <WorkSamples />
        <Resume />
        <Skills />
        <Education />
        <Accomplishments />
        <Contact />
        <Footer />
        <TianChatbot />
      </div>
    </div>
  );
};

export default Index;
