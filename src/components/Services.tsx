import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCode, FaEye, FaList, FaMobileAlt, FaSearch } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4">Mes Services</h2>
        <Row className="g-4">
          <Col md={6}>
            <Card className="text-center">
              <Card.Body>
                <FaCode size={40} className="mb-3 text-primary" />
                <Card.Title>Développement Web</Card.Title>
                <Card.Text>
                  Création de sites sur-mesure performants avec React, Laravel
                  ou WordPress.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="text-center">
              <Card.Body>
                <FaMobileAlt size={40} className="mb-3 text-success" />
                <Card.Title>Responsive Design</Card.Title>
                <Card.Text>
                  Des interfaces adaptées à tous les écrans, du mobile au
                  desktop.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <FaSearch size={40} className="mb-3 text-warning" />
                <Card.Title>SEO & Performance</Card.Title>
                <Card.Text>
                  Optimisation du référencement naturel et de la vitesse de
                  chargement.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <FaEye size={40} className="mb-3 text-danger" />
                <Card.Title>Audit</Card.Title>
                <Card.Text>
                  Analyse et audit de votre stratégie numérique en place et
                  recommandations
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <FaList size={40} className="mb-3 text-info" />
                <Card.Title>Conseils</Card.Title>
                <Card.Text>
                  Conseils en stratégie numérique, séance d'une heure de formation aux basiques du web
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
