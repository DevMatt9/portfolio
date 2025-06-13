import { Navbar, Nav, Container } from "react-bootstrap";
import { FaCode } from "react-icons/fa";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#accueil">
          <FaCode size={30} className="text-primary" /> MARIANI Matthieu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#accueil">Accueil</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#tarifs">Tarifs</Nav.Link>
            <Nav.Link href="#informations">À propos</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
