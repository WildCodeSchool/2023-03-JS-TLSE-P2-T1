import React from "react";
import PropTypes from "prop-types";
import "./ApplyButton.css";

function ApplyButton({ setFinalResult, filteredResult }) {
  return (
    <button
      className="apply-button"
      type="button"
      // sets the results filtered into FinalResult - the ones displayed on the main page
      onClick={() => setFinalResult(filteredResult)}
    >
      Appliquer ({filteredResult.length})
    </button>
  );
}

ApplyButton.propTypes = {
  setFinalResult: PropTypes.func.isRequired,
  filteredResult: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ApplyButton;
