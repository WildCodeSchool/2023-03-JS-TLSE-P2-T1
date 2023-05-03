import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./ScrollToTopButton.css";

function ScrollToTopButton({ isFiltersMenuVisible }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300 && !isFiltersMenuVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`scroll-to-top ${isVisible ? "show" : ""}`}
      onClick={scrollToTop}
    >
      <img src="/assets/toTopButton.png" alt="to top button" />
    </button>
  );
}

ScrollToTopButton.propTypes = {
  isFiltersMenuVisible: PropTypes.bool.isRequired,
};

export default ScrollToTopButton;
