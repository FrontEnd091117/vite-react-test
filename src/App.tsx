import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Jhaps from "./components/Jhaps";
import { Navbar } from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

// https://www.youtube.com/watch?v=7V2W-lHWMEs&t=163s
// TODO: Will do the theming of the portfolio
function App() {
  return (
    <>
      <Navbar />
      <Jhaps />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
