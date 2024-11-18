import React from 'react';
import './JclModal.css';

const JclModal = ({ isOpen, onRequestClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${className}`}>
      <div className="modal-content">
        {children}
        <button className="close-button" onClick={onRequestClose} aria-label="Close modal">
          &times;
        </button>
      </div>
    </div>
  );
};

export default JclModal;