import { Navbar, Nav, Container } from "react-bootstrap";
import { FaCode } from "react-icons/fa";

type HeaderProps = {
  href: string;
  text: string;
};

const Header: React.FC = () => {
  const header: HeaderProps[] = [
    {
      href: "#accueil",
      text: "Accueil",
    },
    {
      href: "#services",
      text: "Services",
    },
    {
      href: "#tarifs",
      text: "Tarifs",
    },
    {
      href: "#informations",
      text: "À propos",
    },
    {
      href: "#contact",
      text: "Contact",
    },
  ];
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#accueil">
          <FaCode size={30} className="text-primary" /> MARIANI Matthieu
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            {header &&
              header.map((headerT, index) => (
                <Nav.Link key={index} href={headerT.href}>{headerT.text}</Nav.Link>
              ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
