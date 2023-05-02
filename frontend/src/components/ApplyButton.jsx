import React from "react";
import PropTypes from "prop-types";
import "./ApplyButton.css";

function ApplyButton({
  setFinalResult,
  filteredResult,
  setIsFiltersMenuVisible,
  setNavbarDisplayedTags,
  selectedFilterTags,
  setNavbarSportCulture,
  isSportChecked,
  isCultureChecked,
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
        // scrolling to the top of the page when clicking
        window.scrollTo(0, 0);
        // if both sport and culture are checked, we display "Sport & Culture" in the navbar
        if (!isSportChecked && !isCultureChecked) {
          setNavbarSportCulture("Culture et sport");
        }
        // if only sport is checked, we display "Sport" in the navbar
        else if (isSportChecked && !isCultureChecked) {
          setNavbarSportCulture("Sport");
        }
        // if only culture is checked, we display "Culture" in the navbar
        else if (!isSportChecked && isCultureChecked) {
          setNavbarSportCulture("Culture");
        }
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
  setNavbarSportCulture: PropTypes.func.isRequired,
  isSportChecked: PropTypes.bool.isRequired,
  isCultureChecked: PropTypes.bool.isRequired,
};
export default ApplyButton;
