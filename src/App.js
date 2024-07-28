import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutUs from "./components/AboutUS.js";
import Services from "./components/Services.js";
import Info from "./components/Info.js";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutUs />

      <Services />
      <Info />
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
