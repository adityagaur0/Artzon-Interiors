import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import aboutImg from "../assets/img/banner-im.jpg";

const AboutUs = () => {
  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <div
          className={`about-section ${
            isVisible ? "animate__animated animate__fadeIn" : ""
          }`}
          id="about"
        >
          <Container fluid>
            <Row className="align-items-center">
              <Col lg={6} className="image-container">
                <img src={aboutImg} alt="About Us" />
              </Col>
              <Col lg={6} className="content-container">
                <h1>
                  <span className="about-title">ABOUT US</span>
                </h1>
                <h2>We Provide You The Best Experience</h2>
                <p className="highlight">
                  Our signature design process comes standard...refresh,
                  remodel, new and enjoyable design experience
                </p>
                <p>
                  At Artzon Interiors, we believe that your home is a reflection
                  of your personality and style. With a focus on luxury,
                  elegance, and modern aesthetics, we transform ordinary spaces
                  into extraordinary experiences.
                </p>
                <p>
                  Our team of expert designers works closely with you to create
                  interiors that are not only beautiful but also functional and
                  timeless.
                </p>
                <button onClick={() => console.log("Learn More")}>
                  Learn More
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </TrackVisibility>
  );
};

export default AboutUs;
