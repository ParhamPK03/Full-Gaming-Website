import React, { useState, useEffect } from "react";
import { FaArrowTurnUp } from "react-icons/fa6";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

 
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors"
        >
          <FaArrowTurnUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
