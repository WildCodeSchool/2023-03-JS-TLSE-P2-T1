import React from "react";
import PropTypes from "prop-types";
import "./ApplyButton.css";

function ApplyButton({ setFinalResult, filterTagsResult }) {
  //   return Button with "Apply filter (filterTagResult.length)" text which setFinalResult(filterTagsResult) on click
  return (
    <button
      className="apply-button"
      type="button"
      onClick={() => setFinalResult(filterTagsResult)}
    >
      Apply filter ({filterTagsResult.length})
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
