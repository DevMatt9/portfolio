import { Container, Row, Col, Card, Button } from "react-bootstrap";

type TarifsProps = {
  size: number;
  title: string;
  price: string;
  description: string;
  cta: string;
  img: string;
};

const Tarifs: React.FC = () => {
  const tarifs: TarifsProps[] = [
    {
      size: 4,
      title: "Landing page",
      price: "500 à 1 000 €",
      description:
        "Une page professionnelle, responsive, rapide à mettre en place.",
      cta: "Choisir",
      img: "assets/landing-page.png",
    },
    {
      size: 4,
      title: "Site vitrine",
      price: "800 à 3 000 €",
      description:
        "3 à 5 pages, formulaire de contact, responsive, optimisé.",
      cta: "Choisir",
      img: "assets/website.jpg",
    },
    {
      size: 4,
      title: "Site sur-mesure",
      price: "Sur devis",
      description:
        "Développement personnalisé avec fonctionnalités avancées.",
      cta: "Choisir",
      img: "assets/custom-website.jpg",
    },
  ];

  return (
    <section id="tarifs" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">💼 Mes Tarifs</h2>
        <Row className="g-4 justify-content-center">
          {tarifs.map((tarif, index) => (
            <Col md={tarif.size} key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={tarif.img} alt={tarif.title} />
                <Card.Body className="text-center d-flex flex-column">
                  <Card.Title className="fs-4">{tarif.title}</Card.Title>
                  <Card.Text className="display-6 text-primary fw-bold">
                    {tarif.price}
                  </Card.Text>
                  <Card.Text className="flex-grow-1">{tarif.description}</Card.Text>
                  <Button variant="success" href="#contact">
                    {tarif.cta}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Tarifs;
