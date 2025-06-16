import { type ReactElement } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCode, FaEye, FaList, FaMobileAlt, FaSearch } from "react-icons/fa";

type ServicesProps = {
  size: number;
  icon: ReactElement<any, any>;
  title: string;
  description: string;
};

const Services: React.FC = () => {

  const services: ServicesProps[] = [
    {
      size: 6,
      icon: <FaCode size={40} className="mb-3 text-primary" />,
      title: "Développement Web",
      description:
        "Création de sites sur-mesure performants avec React, Laravel ou WordPress.",
    },
    {
      size: 6,
      icon: <FaMobileAlt size={40} className="mb-3 text-success" />,
      title: "Responsive Design",
      description:
        "Des interfaces adaptées à tous les écrans, du mobile au desktop.",
    },
    {
      size: 4,
      icon: <FaSearch size={40} className="mb-3 text-warning" />,
      title: "SEO & Performance",
      description:
        "Optimisation du référencement naturel et de la vitesse de chargement.",
    },
    {
      size: 4,
      icon: <FaEye size={40} className="mb-3 text-danger" />,
      title: "Audit",
      description:
        "Analyse et audit de votre stratégie numérique en place et recommandations",
    },
    {
      size: 4,
      icon: <FaList size={40} className="mb-3 text-info" />,
      title: "Conseils",
      description:
        "Conseils en stratégie numérique, séance d'une heure de formation aux basiques du web",
    },
  ];

  return (
    <section id="services" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4">Mes Services</h2>
        <Row className="g-4">
          {services &&
            services.map((service, index) => (
              <Col md={service.size} key={index}>
                <Card className="text-center">
                  <Card.Body>
                    {service.icon}
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
