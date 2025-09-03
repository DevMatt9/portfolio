import { Container, Row, Col, Image } from "react-bootstrap";

const Informations = () => {
  return (
    <section id="informations" className="bg-white">
      <Container>
        <h2 className="text-center mb-4">À propos</h2>
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <Image
              src="assets/flat-matthieu-1024.png"
              alt="Développeur web"
              fluid
              roundedCircle
              style={{ maxWidth: "256px", height: "auto" }}
            />
          </Col>
          <Col md={6}>
            <p>
              💻 Ingénieur Digitalisation avec un parcours de développeur et
              webmaster, j’ai évolué vers la gestion et l’optimisation de
              projets digitaux.
            </p>

            <p>
              🚀 J’accompagne les entreprises dans la mise en place de leur
              solutions digitales, le développement front-end (HTML, CSS,
              JavaScript, React) et back-end (PHP, MySQL, Laravel, API Rest) et
              l’optimisation des processus.
            </p>

            <p>
              🤝 Orienté client, je combine expertise technique et pilotage pour
              délivrer des solutions digitales performantes et adaptées.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Informations;
