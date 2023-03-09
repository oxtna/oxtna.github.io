import { useRef } from "react";
import Landing from "./Landing";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

// TODO: Add css variables that have container width using media queries
const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Landing
        onScrollClick={() =>
          aboutRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <About ref={aboutRef} />
      <TechStack />
      <Projects username="oxtna" topics="showcase" />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
