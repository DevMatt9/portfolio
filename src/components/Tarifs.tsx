import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Tarifs = () => {
  return (
    <section id="tarifs" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Mes Tarifs</h2>
        <Row className="g-4 justify-content-center">
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Landing Page</Card.Title>
                <Card.Text className="display-6 text-primary fw-bold">
                  500 à 1 000 €
                </Card.Text>
                <Card.Text>
                  Une page professionnelle, responsive, rapide à mettre en
                  place.
                </Card.Text>
                <Button variant="success" href="#contact">
                  Me contacter
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Site Vitrine</Card.Title>
                <Card.Text className="display-6 text-primary fw-bold">
                  800 à 3 000 €
                </Card.Text>
                <Card.Text>
                  3 à 5 pages, formulaire de contact, responsive, optimisé.
                </Card.Text>
                <Button variant="success" href="#contact">
                  Me contacter
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Site sur-mesure</Card.Title>
                <Card.Text className="display-6 text-primary fw-bold">
                  Sur devis
                </Card.Text>
                <Card.Text>
                  Développement personnalisé avec fonctionnalités avancées.
                </Card.Text>
                <Button variant="success" href="#contact">
                  Me contacter
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tarifs;
