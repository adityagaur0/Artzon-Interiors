import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/asgrv-logo.png";
import logo from "../assets/img/artzon-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import headerImg from "../assets/img/footer_bg.png";
export const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundImage: `url(${headerImg})`,
        // backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPositionX: "0px",
        backgroundPositionY: "center",
        // backgroundRepeat: "no-repeat",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-between">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          <Col size={12} sm={4} className="text-center text-sm-start">
            <br />
            <div className="social-icon d-flex justify-content-center justify-content-sm-start">
              <a href="">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <br />

            <h6>Address</h6>
            <p>New Delhi , 110039, IN</p>
            <h6>Phone no:</h6>
            <p>+91 99xxxxx</p>

            <h6>
              Email: <a href="mailto:artzon@gmail.com">artzon@gmail.com</a>
            </h6>
            <br />
            <h5>Copyright 2024. All Rights Reserved</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
