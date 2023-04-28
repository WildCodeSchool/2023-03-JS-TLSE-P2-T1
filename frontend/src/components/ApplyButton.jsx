import React from "react";
import PropTypes from "prop-types";
import "./ApplyButton.css";

function ApplyButton({
  setFinalResult,
  filteredResult,
  setIsFiltersMenuVisible,
  setSportButtonClicked,
  setCultureButtonClicked,
}) {
  return (
    <button
      className="apply-button"
      type="button"
      // sets the results filtered into FinalResult - the ones displayed on the main page
      onClick={() => {
        setFinalResult(filteredResult);
        setIsFiltersMenuVisible(false);
        // scrolling to the top of the page when clicking
        window.scrollTo(0, 0);
        // reinitializes falsy values for main buttons sport and culture on homepage
        setSportButtonClicked(false);
        setCultureButtonClicked(false);
      }}
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
  setIsFiltersMenuVisible: PropTypes.func.isRequired,
  setSportButtonClicked: PropTypes.func.isRequired,
  setCultureButtonClicked: PropTypes.func.isRequired,
};
export default ApplyButton;
