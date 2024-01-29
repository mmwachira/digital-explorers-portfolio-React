import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Personal from "./components/Personal";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


import './App.css';
import './css/responsive.css';
import './lib/ionicons/css/ionicons.min.css';
import './lib/owlcarousel/assets/owl.carousel.min.css';
import './lib/magnific-popup/magnific-popup.css';
import './lib/hover/hover.min.css';

//import './js/main.js';

function App() {
  return (
    <div>
      <Navigation />
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
