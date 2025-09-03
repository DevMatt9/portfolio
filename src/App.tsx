import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tarifs from "./components/Tarifs";
import Informations from "./components/Informations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Separator from "./components/Separator";

function Portfolio() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Separator position="top" color="#0D6EFD" />
      <Tarifs />
      <Separator position="bottom" color="#0D6EFD" invertX />
      <Informations />
      <Separator position="top" color="#f8f9fa" />
      <Contact />
      <Separator
        position="top"
        color="#212529"
        backgroundColor="#f8f9fa"
        invertX
      />
      <Footer />
    </>
  );
}

export default Portfolio;
