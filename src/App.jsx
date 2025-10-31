//Animaciones scroll
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from './components/layout/header.jsx';
import Hero from './components/sections/hero.jsx';
import About from './components/sections/about.jsx';
import Footer from './components/layout/footer.jsx';
import Contacto from './components/sections/contact.jsx';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // duración de la animación (en ms)
      once: false,    // si querés que se ejecute solo una vez
      offset: 80,   // cuándo empieza la animación (en px antes de entrar)
      easing: 'ease-in-out', // curva de animación
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Contacto />
      <Footer />
    </>
  )
}

export default App
