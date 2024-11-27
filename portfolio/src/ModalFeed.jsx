// src/ModalFeed.jsx

import React, { useState } from 'react';
import './ModalFeed.css';  // Add styling for the modal
import { FaTimes } from 'react-icons/fa';

function ModalFeed({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic (e.g., sending feedback to an API)
    console.log('Feedback submitted:', { name, comment });

    // Close the modal after submission
    onClose();
  };

  return (
    isOpen && (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-modal" onClick={onClose}><FaTimes /></button>
          <h2>Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment">Comment:</label>
              <textarea
                id="comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
                placeholder="Your feedback"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    )
  );
}

export default ModalFeed;
