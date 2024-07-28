import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
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
                  {/* <Link to="#connect">
                    <button>Discover Now</button>
                  </Link> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
