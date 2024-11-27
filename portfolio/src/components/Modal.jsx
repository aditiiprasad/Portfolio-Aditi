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
          X
        </button>
        <div className="image-grid">
          <a href="https://github.com/aditiiprasad/GameHub" target="_blank" rel="noopener noreferrer">
            <img src={gamehub} alt="Practice Project 2" />
          </a>
          <a href="https://github.com/aditiiprasad/CuCo" target="_blank" rel="noopener noreferrer">
            <img src={cuco} alt="Practice Project 5" />
          </a>
          <a href="https://github.com/aditiiprasad/React-Practice-Projects/tree/main/03-Password-Generator" target="_blank" rel="noopener noreferrer">
            <img src={password} alt="Practice Project 4" />
          </a>
          <a href="https://github.com/aditiiprasad/Amazon-clone" target="_blank" rel="noopener noreferrer">
            <img src={Aclone} alt="Practice Project 1" />
          </a>
         
          <a href="https://github.com/aditiiprasad/React-Practice-Projects/tree/main/04-currency-convertor" target="_blank" rel="noopener noreferrer">
            <img src={reactcuco} alt="Practice Project 3" />
          </a>
          
         
          <a href="https://github.com/aditiiprasad/React-Practice-Projects/tree/main/02-Background-Changer" target="_blank" rel="noopener noreferrer">
            <img src={bgchanger} alt="Practice Project 6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
