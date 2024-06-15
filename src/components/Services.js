import React from "react";
import bgImage from "../assets/img/service-bg.png";
import architectureIcon from "../assets/img/se-icon1.png";
import interiorDesignIcon from "../assets/img/se-icon2.png";
import retailDesignsIcon from "../assets/img/se-icon3.png";

const services = [
  {
    title: "Architecture",
    description:
      "Vivamus lorem nibh, viverra et semper vel, auctor vitae elementum lacus.",
    icon: architectureIcon,
  },
  {
    title: "Interior Design",
    description:
      "Vivamus lorem nibh, viverra et semper vel, auctor vitae elementum lacus.",
    icon: interiorDesignIcon,
  },
  {
    title: "Retail Designs",
    description:
      "Vivamus lorem nibh, viverra et semper vel, auctor vitae elementum lacus.",
    icon: retailDesignsIcon,
  },
  {
    title: "Architecture",
    description:
      "Vivamus lorem nibh, viverra et semper vel, auctor vitae elementum lacus.",
    icon: architectureIcon,
  },
  {
    title: "Interior Design",
    description:
      "Vivamus lorem nibh, viverra et semper vel, auctor vitae elementum lacus.",
    icon: interiorDesignIcon,
  },
  {
    title: "Retail Designs",
    description:
      "Vivamus lorem nibh, viverra et semper vel, auctor vitae elementum lacus.",
    icon: retailDesignsIcon,
  },
];

const Services = () => {
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
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-image">
              <img src={service.icon} alt={service.title} />
            </div>
            <div className="service-details">
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
