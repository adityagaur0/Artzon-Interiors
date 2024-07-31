import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import Lightbox from "./LightBox"; // Import Lightbox component
import bgImage from "../assets/img/service-bg.png";
import project1 from "../assets/img/projects/p1.JPG";
import project2 from "../assets/img/projects/p2.JPG";
import project3 from "../assets/img/projects/p3.JPG";
// import project4 from "../assets/img/projects/p4.JPG";
import project5 from "../assets/img/projects/p5.JPG";
import project6 from "../assets/img/projects/p6.JPG";
import project7 from "../assets/img/projects/p7.JPG";
// import project8 from "../assets/img/projects/p8.JPG";
import project9 from "../assets/img/projects/p9.JPG";
import project10 from "../assets/img/projects/p10.JPG";
// import project12 from "../assets/img/projects/p12.JPG";
import project13 from "../assets/img/projects/p13.JPG";
import project14 from "../assets/img/projects/p14.JPG";
import project15 from "../assets/img/projects/p15.JPG";
import project16 from "../assets/img/projects/p16.JPG";
// import project17 from "../assets/img/projects/p17.JPG";

const recentProjects = [
  project1,
  project2,
  project3,
  // project4,
  project5,
  project6,
  // project8,
  project9,
  project10,
  // project12,
  project13,
  project14,
  project15,
  project7,
  project16,
  // project17,
];

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [itemsPerGroup, setItemsPerGroup] = useState(3);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerGroup(1);
      } else {
        setItemsPerGroup(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  const groupedProjects = [];
  for (let i = 0; i < recentProjects.length; i += itemsPerGroup) {
    groupedProjects.push(recentProjects.slice(i, i + itemsPerGroup));
  }

  return (
    <div
      className="projects"
      id="projects"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPositionX: "-10px",
        backgroundPositionY: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 1,
      }}
    >
      <h2 className="recent-projects-title">Recent Projects</h2>
      <Carousel className="projects-carousel">
        {groupedProjects.map((projectGroup, index) => (
          <Carousel.Item key={index}>
            <Container>
              <Row>
                {projectGroup.map((project, idx) => (
                  <Col key={idx} className="project-col">
                    <img
                      className="d-block w-100 project-carousel-img"
                      src={project}
                      alt={`Project ${index * itemsPerGroup + idx + 1}`}
                      onClick={() => handleImageClick(project)}
                      style={{ cursor: "pointer" }}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
      <Lightbox
        show={lightboxOpen}
        image={selectedImage}
        handleClose={handleCloseLightbox}
      />
    </div>
  );
};

export default Projects;
