import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          <Col>
            <h5>Mentions légales</h5>
            <p className="mb-1">
              Site édité par Matthieu Mariani — Micro-entreprise, SIRET 912 980 174 00029
            </p>
            <p className="mb-1">Adresse : 99 Vieille Route de la Gavotte, Résidence le Clos Idéal, Bâtiement B3-2, 13 170 Les Pennes-Mirabeau</p>
            <p className="mb-1">Email : devmattmar@gmail.com</p>
            <p className="mb-0">Hébergeur : GitHub Pages</p>
          </Col>
        </Row>
        <hr className="border-light" />
        <p className="text-center mb-0" style={{ fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Matthieu Mariani. Tous droits réservés.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
