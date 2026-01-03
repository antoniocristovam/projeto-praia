import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Accommodations from "./components/Accommodations";
import Experience from "./components/Experience";
import Location from "./components/Location";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Accommodations />
      <Experience />
      <Location />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
