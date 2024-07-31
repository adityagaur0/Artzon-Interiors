import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/artzonlogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <div
        className={scrolled ? "navbar-container scrolled" : "navbar-container"}
      >
        <div className="top-section">
          <Container>
            <Row>
              <Col className="social-icon-col">
                <div className="social-icon">
                  <a
                    href="https://www.instagram.com/artzon_interiors17/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={navIcon3} alt="Instagram" />
                  </a>
                  <a href="#">
                    <img src={navIcon2} alt="Icon" />
                  </a>
                  <a href="">
                    <img src={navIcon1} alt="Icon" />
                  </a>
                </div>
              </Col>
              <Col className="center-logo-col">
                <img src={logo} className="center-logo" alt="Logo" />
              </Col>
              <Col className="contact-info-col" xs={12} md={4} lg={4}>
                <div className="contact-info">
                  <h6>
                    <span>&#9993;</span>{" "}
                    <a
                      href="mailto:interiorsartzon@gmail.com"
                      className="phone-link"
                    >
                      interiorsartzon@gmail.com
                    </a>
                  </h6>
                  <h6>
                    <span>&#128222;</span>{" "}
                    <a href="tel:+919599055822" className="phone-link">
                      9599055822
                    </a>
                    ,{""}
                    <a href="tel:+919718906563" className="phone-link">
                      9718906563
                    </a>
                  </h6>
                </div>
              </Col>
            </Row>
          </Container>
          {/* <div className="social-icons">
            <a href="#">
              <img src={navIcon1} alt="icon1" />
            </a>
            <a href="#">
              <img src={navIcon2} alt="icon2" />
            </a>
            <a href="#">
              <img src={navIcon3} alt="icon3" />
            </a>
          </div> */}
          {/* <img src={logo} className="center-logo" alt="Logo" /> */}
          {/* <div className="contact-info">
            <span>Email: info@example.com</span>
            <span>Phone: +123 456 7890</span>
          </div> */}
        </div>
        <Navbar expand="md" className="bottom-section">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link
                  href="#home"
                  className={
                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("home")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#about"
                  className={
                    activeLink === "about"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("about")}
                >
                  About Us
                </Nav.Link>
                <Nav.Link
                  href="#services"
                  className={
                    activeLink === "services"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("services")}
                >
                  Services
                </Nav.Link>
                <Nav.Link
                  href="#projects"
                  className={
                    activeLink === "projects"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("projects")}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className={
                    activeLink === "contact"
                      ? "active navbar-link"
                      : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink("contact")}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Router>
  );
};

export default NavBar;
