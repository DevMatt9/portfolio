import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <h5 className="mb-3">📄 Mentions légales</h5>
            <p className="mb-1">
              Site édité par Matthieu Mariani — Micro-entreprise, SIRET 912 980 174 00029
            </p>
            <p className="mb-1">📍 Marseille</p>
            <p className="mb-1">📧 <a href="mailto:devmattmar@gmail.com" className="text-light">devmattmar@gmail.com</a></p>
            <p className="mb-0">🖥️ Hébergeur : GitHub Pages</p>
          </Col>

          <Col md={6} className="text-md-end mt-4 mt-md-0">
            <h5 className="mb-3">🌐 Suivez-moi</h5>
            <div className="d-flex justify-content-md-end gap-3 align-items-center">
              <a href="https://github.com/DevMatt9" target="_blank" rel="noopener noreferrer" className="text-light fs-4" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/matthieu-mariani-57aa9b13a/" target="_blank" rel="noopener noreferrer" className="text-light fs-4" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
            <p className="mt-3 mb-0 small">
              🤓 Développé avec tendresse (bon et un peu React aussi !)
            </p>
          </Col>
        </Row>

        <hr className="border-light" />
        <p className="text-center mb-0 small">
          &copy; {new Date().getFullYear()} Matthieu Mariani – Tous droits réservés. ⚖️
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
