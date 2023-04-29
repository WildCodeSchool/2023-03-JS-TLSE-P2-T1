import React from "react";
import PropTypes from "prop-types";
import "./SortingMenu.css";

function SortingMenu({ finalResult, setFinalResult }) {
  setFinalResult(...finalResult);
  return (
    <div>
      <p>Clique ici pour trier</p>
    </div>
  );
}

export default SortingMenu;

SortingMenu.propTypes = {
  finalResult: PropTypes.arrayOf(
    PropTypes.shape({ nature: PropTypes.string.isRequired }).isRequired
  ).isRequired,
  setFinalResult: PropTypes.func.isRequired,
};
