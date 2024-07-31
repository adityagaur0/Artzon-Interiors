import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bgImage from "../assets/img/service-bg.png";
import architectureIcon from "../assets/img/se-icon1.png";
import interiorDesignIcon from "../assets/img/se-icon2.png";
import retailDesignsIcon from "../assets/img/se-icon3.png";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  {
    title: "Architecture",
    description: "Designing functional and aesthetically pleasing buildings.",
    icon: architectureIcon,
  },
  {
    title: "Interior Design",
    description: "Creating stylish and functional interior spaces efficiently.",
    icon: interiorDesignIcon,
  },
  {
    title: "Furniture Design",
    description: "Crafting innovative furniture pieces for various needs.",
    icon: retailDesignsIcon,
  },
  {
    title: "Office Design",
    description: "Designing efficient and ergonomic office environments.",
    icon: architectureIcon,
  },
];

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      className="services"
      id="services"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPositionX: "-10px",
        backgroundPositionY: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 1, // Ensure it is layered correctly
      }}
    >
      <h2 className="services-title">Our Services</h2>
      <h3 className="services-subtitle">What We’re Providing</h3>
      <div className="services-container" ref={ref}>
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="service-image">
              <img src={service.icon} alt={service.title} />
            </div>
            <div className="service-details">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
