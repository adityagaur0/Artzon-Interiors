import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import aboutImg from "../assets/img/banner-im.jpg";
import "animate.css";

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="about-section" id="about" ref={ref}>
      <Container fluid>
        <Row className="align-items-center">
          <Col lg={6} className="image-container">
            <motion.img
              src={aboutImg}
              alt="About Us"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="about-image"
            />
          </Col>
          <Col lg={6} className="content-container">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="about-content"
            >
              <h1>
                <motion.span
                  className="about-title"
                  initial={{ rotate: 0 }}
                  animate={inView ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 2 }}
                >
                  About us
                </motion.span>
              </h1>
              <h2>We Provide You The Best Experience</h2>
              <p className="highlight">
                Welcome to Artzone Interior and Decor, where creativity meets
                functionality in transforming spaces into breathtaking works of
                art.
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                At Artzone Interior and Decor, we harness over 26 years of
                design expertise to create bespoke spaces that blend
                functionality with artistic flair. Our meticulous attention to
                detail and collaborative approach ensure each luxurious
                residential interior and inviting outdoor landscape reflects our
                clients' personalities and aspirations. Whether revamping a
                living room, redesigning a garden, or creating a serene outdoor
                oasis, we transform dreams into masterpieces. Explore our
                diverse portfolio and see how every space can tell a story and
                inspire admiration.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Welcome to Artzone Interior and Decor – Where Your Vision Comes
                to Life
              </motion.p>
              <motion.button
                onClick={() => console.log("Learn More")}
                whileHover={{ scale: 1.1, backgroundColor: "white" }}
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
