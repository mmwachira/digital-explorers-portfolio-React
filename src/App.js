import Home from "./pages/Home";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Personal />
      <Skills />
      <Projects />
      <Interests />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
