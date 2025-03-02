import React, { useEffect, useState } from "react";
import "../styles/global.css";

const PopupMessage = ({ message, type, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      if (message) {
        setIsVisible(true);
  
        // Auto close after 3 seconds
        const timer = setTimeout(() => {
          handleClose();
        }, 5000);
  
        return () => clearTimeout(timer);
      }
    }, [message]); // Removed `onClose` from dependencies to avoid unintended re-renders
  
    const handleClose = () => {
      setIsVisible(false);
      setTimeout(() => {
        onClose(); // Ensure parent component clears the message state after animation
      }, 300); // Delay clearing message to allow fade-out animation
    };
  
    return (
      <div className={`popupmessage_style ${type} ${isVisible ? "active" : ""}`}>
        {message}
        <button className="close-btn" onClick={handleClose}>×</button>
      </div>
    );
  };

export default PopupMessage;