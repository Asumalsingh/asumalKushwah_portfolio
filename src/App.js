import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="">
        <Home />
        <About />
        <Skills />
        <PortFolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
