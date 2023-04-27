import React from "react";
import PropTypes from "prop-types";
import "./ApplyButton.css";

function ApplyButton({ setFinalResult, filterTagsResult }) {
  return (
    <button
      className="apply-button"
      type="button"
      // sets the results filtered into FinalResult - the ones displayed on the main page
      onClick={() => setFinalResult(filterTagsResult)}
    >
      Appliquer ({filterTagsResult.length})
    </button>
  );
}

ApplyButton.propTypes = {
  setFinalResult: PropTypes.func.isRequired,
  filterTagsResult: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ApplyButton;
