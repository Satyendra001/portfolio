import Work from "./components/Work";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Footer from "./components/Footer";
import Experience from "./components/Experience";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Work/>
      <About/>
      {/* <Experience/> */}
      <Footer/>
    </>
  );
};

export default App;
