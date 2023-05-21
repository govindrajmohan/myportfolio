import React, { useState, useEffect } from 'react';
import "./ScrollToTop.css"
import {
    FaArrowUp,
} from "react-icons/fa";

const ScrollToTopButton = () => {
  // State to track button visibility
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Function to show/hide the button based on scroll position
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top-button">
          <FaArrowUp/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
