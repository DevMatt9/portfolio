import { Container, Row, Col, Image } from "react-bootstrap";

const Informations = () => {
  return (
    <section id="informations" className="py-5 bg-white">
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
              Développeur passionné par le web, je crée des sites modernes,
              rapides et sur-mesure. Mon objectif : offrir des solutions
              élégantes et performantes, adaptées à vos besoins.
            </p>
            <p>
              Basé à Marseille, je travaille avec des clients de tous horizons,
              en apportant une approche humaine et transparente.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Informations;
