import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";

import "animate.css";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const service_id = "service_w8qj525";
    const template_id = "template_asp41oa";
    const user_id = "ZOx38AUYFKnFOGxTY";
    const templateParams = {
      from_firstname: formDetails.firstName,
      from_lastname: formDetails.lastName,
      from_email: formDetails.email,
      from_mobile: formDetails.phone,
      message: formDetails.message,
    };
    setButtonText("Sending...");
    emailjs
      .send(service_id, template_id, templateParams, user_id)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setStatus({ success: true, message: "Message sent successfully" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      });
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row>
          <Col lg={12}>
            <motion.div
              ref={ref}
              className="contact-bx"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="contact-title">Contact Us</h2>
              <h3 className="contact-subtitle">Get A Quote</h3>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder="First Name"
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder="Last Name"
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder="Email Address"
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      value={formDetails.phone}
                      placeholder="Phone No."
                      onChange={(e) => onFormUpdate("phone", e.target.value)}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      value={formDetails.message}
                      placeholder="Message"
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
