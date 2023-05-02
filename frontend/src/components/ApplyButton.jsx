import React from "react";
import PropTypes from "prop-types";
import "./ApplyButton.css";

function ApplyButton({
  setFinalResult,
  filteredResult,
  setIsFiltersMenuVisible,
  setNavbarDisplayedTags,
  selectedFilterTags,
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
        setNavbarDisplayedTags(selectedFilterTags);
        setSportButtonClicked(false);
        setCultureButtonClicked(false);
        // scrolling to the top of the page when clicking
        window.scrollTo(0, 0);
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
  setNavbarDisplayedTags: PropTypes.func.isRequired,
  selectedFilterTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSportButtonClicked: PropTypes.func.isRequired,
  setCultureButtonClicked: PropTypes.func.isRequired,
};
export default ApplyButton;
