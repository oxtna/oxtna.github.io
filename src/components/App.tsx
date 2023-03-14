import { useRef } from "react";
import ParallaxBackground from "./ParallaxBackground";
import Landing from "./Landing";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ParallaxBackground />
      <Landing
        onScrollButtonClick={() =>
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
