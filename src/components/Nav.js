
'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Nav,Navbar,NavDropdown} from "react-bootstrap";
import style from "@/css/Nav.css";
import {useState, useEffect} from "react";

export default function NavComponent() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`${
        scrolled ? "bg-dark" : "bg-transparent"
      } shadow-none transition-all`}
    >
      <Container>
        <Navbar.Brand href="/" className="text-white" style={{ fontWeight:"bold" }}>
          ALI NEDAAEE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <span className="navbar-toggler-icon"/>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/pages/about" className="nav-link-custom">
              ABOUT
            </Nav.Link> 
            <Nav.Link href="/pages/experience" className="nav-link-custom">
              EXPERIENCE
            </Nav.Link>
            <Nav.Link href="/pages/skills" className="nav-link-custom">
              SKILLS
            </Nav.Link>
            <Nav.Link href="/pages/projects" className="nav-link-custom">
              PROJECTS
            </Nav.Link>
            <Nav.Link href="/pages/certificates" className="nav-link-custom">
              CERTIFICATES
            </Nav.Link>
            <Nav.Link href="#" className="nav-link-custom">
              PUBLICATIONS
            </Nav.Link>
            <Nav.Link href="/pages/books" className="nav-link-custom">
              BOOKS
            </Nav.Link>
            <Nav.Link href="/pages/music" className="nav-link-custom">
              MUSICS
            </Nav.Link>
            <NavDropdown
              title="EDUCATION"
              id="basic-nav-dropdown"
              menuVariant="dark"
              className="nav-link-custom text-white"
            >
              <NavDropdown.Item href="/pages/education/about">ABOUT</NavDropdown.Item>
              <NavDropdown.Item href="#">RECOMMANDATIONS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">HONORS & AWARDS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
