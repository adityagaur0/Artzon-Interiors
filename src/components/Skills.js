import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/about-img1.png";
import meter2 from "../assets/img/about-img2.png";
import meter3 from "../assets/img/about-img3.png";
import meter4 from "../assets/img/about-img4.png";

import headerImg from "../assets/img/about-img.jpg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Us</h2>
              <p>
                At Artzon Interiors, we believe that your home is a reflection
                of your personality and style. With a focus on luxury, elegance,
                and modern aesthetics, we transform ordinary spaces into
                extraordinary experiences. Our team of expert designers works
                closely with you to create interiors that are not only beautiful
                but also functional and timeless.
              </p>
              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} height="150" width="150" alt="Image" />
                  <h5>Consult</h5>
                </div>
                <div className="item">
                  <img src={meter2} height="150" width="150" alt="Image" />
                  <h5>Design</h5>
                </div>
                <div className="item">
                  <img src={meter3} height="150" width="150" alt="Image" />
                  <h5>Services</h5>
                </div>
                <div className="item">
                  <img src={meter4} height="150" width="150" alt="Image" />
                  <h5>Integrate</h5>
                </div>
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  );
};
