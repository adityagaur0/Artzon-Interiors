import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

// export const Contact = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//   };
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("Send");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const service_id = "service_w8qj525";
//     const template_id = "template_asp41oa";
//     const user_id = "ZOx38AUYFKnFOGxTY";
//     const templateParams = {
//       from_firstname: formDetails.firstName,
//       from_lastname: formDetails.lastName,
//       from_email: formDetails.email,
//       from_mobile: formDetails.phone,
//       message: formDetails.message,
//     };

//     await setButtonText("Sending...");
//     emailjs
//       .send(service_id, template_id, templateParams, user_id)
//       .then((response) => {
//         console.log("Email sent successfully!", response);
//         setStatus({ succes: true, message: "Message sent successfully" });
//       })
//       .catch((error) => {
//         console.error("Error sending email:", error);
//         setStatus({
//           succes: false,
//           message: "Something went wrong, please try again later.",
//         });
//       });
//     // let response = await fetch("http://localhost:5000/contact", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json;charset=utf-8",
//     //   },
//     //   body: JSON.stringify(formDetails),
//     // });
//     console.log(formDetails);
//     setButtonText("Send");
//     setFormDetails(formInitialDetails);
//     // let result = await response.json();
//     // setFormDetails(formInitialDetails);
//     // if (result.code == 200) {
//     //   setStatus({ succes: true, message: 'Message sent successfully'});
//     // } else {
//     //   setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
//     // }
//   };

//   return (
//     <section className="contact" id="connect">
//       <div className="contact-bx wow zoomIn">
// <Container>
//   <Row className="align-items-center">
//     {/* <Col size={12} md={6}>
//     <TrackVisibility>
//       {({ isVisible }) =>
//         <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg}  alt="Contact Us"/>
//       }
//     </TrackVisibility>
//   </Col> */}
//     <Col size={12} md={6}>
//       <TrackVisibility>
//         {({ isVisible }) => (
//           <div
//             className={
//               isVisible ? "animate__animated animate__fadeIn" : ""
//             }
//           >
//             <h2>Get In Touch</h2>
//             <form onSubmit={handleSubmit}>
//               <Row>
//                 <Col size={12} sm={6} className="px-1">
//                   <input
//                     type="text"
//                     value={formDetails.firstName}
//                     placeholder="First Name"
//                     onChange={(e) =>
//                       onFormUpdate("firstName", e.target.value)
//                     }
//                   />
//                 </Col>
//                 <Col size={12} sm={6} className="px-1">
//                   <input
//                     type="text"
//                     value={formDetails.lasttName}
//                     placeholder="Last Name"
//                     onChange={(e) =>
//                       onFormUpdate("lastName", e.target.value)
//                     }
//                   />
//                 </Col>
//                 <Col size={12} sm={6} className="px-1">
//                   <input
//                     type="email"
//                     value={formDetails.email}
//                     placeholder="Email Address"
//                     onChange={(e) =>
//                       onFormUpdate("email", e.target.value)
//                     }
//                   />
//                 </Col>
//                 <Col size={12} sm={6} className="px-1">
//                   <input
//                     type="tel"
//                     value={formDetails.phone}
//                     placeholder="Phone No."
//                     onChange={(e) =>
//                       onFormUpdate("phone", e.target.value)
//                     }
//                   />
//                 </Col>
//                 <Col size={12} className="px-1">
//                   <textarea
//                     rows="6"
//                     value={formDetails.message}
//                     placeholder="Message"
//                     onChange={(e) =>
//                       onFormUpdate("message", e.target.value)
//                     }
//                   ></textarea>
//                   <button type="submit">
//                     <span>{buttonText}</span>
//                   </button>
//                 </Col>
//                 {status.message && (
//                   <Col>
//                     <p
//                       className={
//                         status.success === false ? "danger" : "success"
//                       }
//                     >
//                       {status.message}
//                     </p>
//                   </Col>
//                 )}
//               </Row>
//             </form>
//           </div>
//         )}
//       </TrackVisibility>
//     </Col>
//   </Row>
//         </Container>
//       </div>
//     </section>
//   );
// };
// export default Contact;

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

    await setButtonText("Sending...");
    emailjs
      .send(service_id, template_id, templateParams, user_id)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setStatus({ succes: true, message: "Message sent successfully" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setStatus({
          succes: false,
          message: "Something went wrong, please try again later.",
        });
      });
    // let response = await fetch("http://localhost:5000/contact", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(formDetails),
    // });
    console.log(formDetails);
    setButtonText("Send");
    setFormDetails(formInitialDetails);
    // let result = await response.json();
    // setFormDetails(formInitialDetails);
    // if (result.code == 200) {
    //   setStatus({ succes: true, message: 'Message sent successfully'});
    // } else {
    //   setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    // }
  };
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
    <section className="contact" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-bx ">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
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
                            value={formDetails.lasttName}
                            placeholder="Last Name"
                            onChange={(e) =>
                              onFormUpdate("lastName", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="email"
                            value={formDetails.email}
                            placeholder="Email Address"
                            onChange={(e) =>
                              onFormUpdate("email", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="tel"
                            value={formDetails.phone}
                            placeholder="Phone No."
                            onChange={(e) =>
                              onFormUpdate("phone", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea
                            rows="6"
                            value={formDetails.message}
                            placeholder="Message"
                            onChange={(e) =>
                              onFormUpdate("message", e.target.value)
                            }
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
                  </div>
                )}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
