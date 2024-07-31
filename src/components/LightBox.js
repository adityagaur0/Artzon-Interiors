import React from "react";
import { Modal } from "react-bootstrap";

const Lightbox = ({ show, image, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="lightbox-modal"
    >
      <Modal.Body className="lightbox-body">
        <img src={image} alt="Full Size Project" className="lightbox-image" />
        <button className="close-button" onClick={handleClose}>
          &times;
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default Lightbox;
