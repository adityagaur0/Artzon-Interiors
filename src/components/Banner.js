import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/banner-i.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  //   const [loopNum, setLoopNum] = useState(0);
  //   const [isDeleting, setIsDeleting] = useState(false);
  //   const [text, setText] = useState("");
  //   const [delta, setDelta] = useState(300 - Math.random() * 100);
  //   const [index, setIndex] = useState(1);
  //   const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  //   const period = 2000;

  //   useEffect(() => {
  //     let ticker = setInterval(() => {
  //       tick();
  //     }, delta);

  //     return () => {
  //       clearInterval(ticker);
  //     };
  //   }, [text]);

  //   const tick = () => {
  //     let i = loopNum % toRotate.length;
  //     let fullText = toRotate[i];
  //     let updatedText = isDeleting
  //       ? fullText.substring(0, text.length - 1)
  //       : fullText.substring(0, text.length + 1);

  //     setText(updatedText);

  //     if (isDeleting) {
  //       setDelta((prevDelta) => prevDelta / 2);
  //     }

  //     if (!isDeleting && updatedText === fullText) {
  //       setIsDeleting(true);
  //       setIndex((prevIndex) => prevIndex - 1);
  //       setDelta(period);
  //     } else if (isDeleting && updatedText === "") {
  //       setIsDeleting(false);
  //       setLoopNum(loopNum + 1);
  //       setIndex(1);
  //       setDelta(500);
  //     } else {
  //       setIndex((prevIndex) => prevIndex + 1);
  //     }
  //   };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-left">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <h1>
                    Design Your Dream <br />
                    Home With Us
                  </h1>
                  <p>Luxurious Interior Design for the Modern Home.</p>
                  <br />
                  <button>Discover Now</button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

// .navbar-text button {
// font-weight: 700;
// color: rgba(245, 245, 245, 0.489);
// border: 1px solid rgba(245, 245, 245, 0.489);
// padding: 10px 20px;
// font-size: 14px;
// margin-left: 10px;
// position: relative;
// background-color: transparent;
// transition: 0.3s ease-in-out;
// }

// .navbar-text button span {
//   z-index: 1;
// }

// .navbar-text button::before {
//   content: "";
//   width: 0%;
//   height: 100%;
//   position: absolute;
//   background-color: whitesmoke;
//   left: 0;
//   top: 0;
//   z-index: -1;
//   transition: 0.3s ease-in-out;
// }

// .navbar-text button:hover {
//   color: black;
// }

// .navbar-text button:hover::before {
// content: "";
// width: 100%;
// height: 100%;
// position: absolute;
// }
