import React from "react";
import "./Modal.css";
import Aclone from "./images/Aclone.png";
import bgchanger from "./images/bgchanger.png";
import cuco from "./images/cuco.png";
import gamehub from "./images/gamehub.png";
import password from "./images/password.png";
import reactcuco from "./images/reactcuco.png";

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <div className="image-grid">
          <img src={Aclone} alt="Practice Project 1" />
          <img src={gamehub} alt="Practice Project 2" />
          <img src={reactcuco} alt="Practice Project 3" />
          <img src={password} alt="Practice Project 4" />
          <img src={cuco} alt="Practice Project 5" />
          <img src={bgchanger} alt="Practice Project 6" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
