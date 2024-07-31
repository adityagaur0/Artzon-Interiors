import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import logo from "../assets/img/artzon-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import headerImg from "../assets/img/footer_bg.png";

export const Footer = () => {
  const { ref: footerRef, inView: footerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.footer
      className="footer"
      style={{
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPositionX: "0px",
        backgroundPositionY: "center",
        position: "relative",
        zIndex: 1,
      }}
      ref={footerRef}
    >
      <Container>
        <Row className="align-items-center justify-content-between">
          <MailchimpForm />
          <Col size={12} sm={6} className="text-center text-sm-start">
            <a href="#">
              <motion.img
                src={logo}
                alt="Logo"
                initial={{ opacity: 0 }}
                animate={footerInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              />
            </a>
          </Col>

          <Col
            size={12}
            sm={12}
            md={4}
            className="text-center text-sm-start contact-detials"
          >
            <br />

            <motion.div
              className="social-iconn "
              initial={{ opacity: 0 }}
              animate={footerInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a
                href="https://www.instagram.com/artzon_interiors17/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
              {/* <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="">
                <img src={navIcon1} alt="Icon" />
              </a> */}
            </motion.div>
            <br />
            <motion.div
              initial={{ opacity: 0 }}
              animate={footerInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h6>Address</h6>
              <p>
                <a>
                  Dwarka more Vipin garden extension street no 2 plot no 46, New
                  Delhi ,IN
                </a>
              </p>
              <h6>Phone no:</h6>
              <p>
                <a href="tel:+919599055822" className="phone-link">
                  +91 9599055822
                </a>{" "}
                ,{" "}
                <a href="tel:+919718906563" className="phone-link">
                  +91 9718906563
                </a>
              </p>
              <h6>Email : </h6>
              <p>
                <a
                  href="mailto:interiorsartzon@gmail.com"
                  className="phone-link"
                >
                  interiorsartzon@gmail.com
                </a>
              </p>

              <h5>Copyright 2024. All Rights Reserved</h5>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.footer>
  );
};
