import React, { useState } from "react";
import "./Pprojects.css";
import Modal from "./Modal";

const Pprojects = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="projects-container">
      
      <button className="view-projects-btn" onClick={handleModalToggle}>
        Click for Practice Projects
      </button>

      {showModal && <Modal onClose={handleModalToggle} />}
    </div>
  );
};

export default Pprojects;
