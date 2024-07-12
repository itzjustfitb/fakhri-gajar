import "./assets/styles/main.css";
import "remixicon/fonts/remixicon.css";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "initial";
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 200,
    });
  }, []);

  return (
    <>
      {isLoading ? <Loader /> : ""}
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
