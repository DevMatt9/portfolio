import { Container, Button } from "react-bootstrap";
import "./Hero.css"; // on va y mettre le style spécifique

const Hero = () => {
  return (
    <section id="accueil" className="hero-section position-relative">
      {/* Vidéo en fond */}
      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/13745411_3840_2160_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay sombre pour lisibilité */}
      <div className="hero-overlay"></div>

      {/* Contenu texte au-dessus */}
      <div className="hero-content text-white text-center">
        <Container>
          <h1 className="display-4 fw-bold">
            Développeur Fullstack React & Laravel
          </h1>
          <p className="lead my-4">
            Création de sites modernes, performants et adaptés à vos besoins.
          </p>
          <Button variant="light" href="#contact">
            Me contacter
          </Button>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
