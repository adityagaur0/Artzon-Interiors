import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "../assets/img/ARTZON.png";
import "animate.css";

const Info = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="info-section" id="info" ref={ref}>
      <Container fluid className="text-center">
        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="main-heading"
            >
              Why Artzon Interiors?
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="sub-heading"
            >
              Bring Your Vision & Connect with the Professionals for an
              impeccable experience.
            </motion.h2>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col lg={8}>
            <motion.img
              src={aboutImg}
              alt="About Us"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="info-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
