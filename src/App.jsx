import "./assets/styles/main.css";
import "remixicon/fonts/remixicon.css";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
