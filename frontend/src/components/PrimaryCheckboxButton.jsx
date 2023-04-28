import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./PrimaryCheckboxButton.css";

function PrimaryCheckboxButton({
  setFinalResult,
  fetchedResult,
  setCultureButtonClicked,
  setSportButtonClicked,
  cultureButtonClicked,
  sportButtonClicked,
}) {
  // defining four consts for the buttons icons url depending whether the button is clicked or not
  const cultureIcon = "\\assets\\header_icons\\culture.png";
  const cultureClickedIcon = "\\assets\\header_icons\\culture_clicked.png";
  const sportIcon = "\\assets\\header_icons\\sport.png";
  const sportClickedIcon = "\\assets\\header_icons\\sport_clicked.png";

  // handleClickCulture and handleClickSport definition, changes the state of the button (clicked or not). if another button is clicked, it is unclicked
  const handleClickCulture = () => {
    if (!cultureButtonClicked && sportButtonClicked) {
      setSportButtonClicked(!sportButtonClicked);
    }
    setCultureButtonClicked(!cultureButtonClicked);
  };

  const handleClickSport = () => {
    if (!sportButtonClicked && cultureButtonClicked) {
      setCultureButtonClicked(!cultureButtonClicked);
    }
    setSportButtonClicked(!sportButtonClicked);
  };

  // useEffect monitors any change on clicked state of the two buttons and filters fetched_result according to the buttons clicked
  useEffect(() => {
    if (
      // both buttons unclicked, returns all results
      !cultureButtonClicked &&
      !sportButtonClicked
    ) {
      setFinalResult(fetchedResult);
      // two other cases : only one button is clicked, returns result depending on the button chosen. Applies filters
    } else if (cultureButtonClicked && !sportButtonClicked) {
      const mainFilterResult = fetchedResult.filter(
        (result) => result.nature === "culture"
      );
      setFinalResult(mainFilterResult);
    } else if (!cultureButtonClicked && sportButtonClicked) {
      const mainFilterResult = fetchedResult.filter(
        (result) => result.nature === "sport"
      );
      setFinalResult(mainFilterResult);
    }
  }, [cultureButtonClicked, sportButtonClicked]);
  return (
    <div className="primaryCheckboxButtons">
      <button
        type="button"
        className={`primaryButton cultureButton ${
          cultureButtonClicked ? "mainButtonClicked" : ""
        }`}
        onClick={() => handleClickCulture()}
      >
        {/* displaying one icon or the other depending on button status : clicked or not */}
        <img
          src={cultureButtonClicked ? cultureClickedIcon : cultureIcon}
          alt="culture"
        />
        <p>Culture</p>
      </button>
      <button
        type="button"
        className={`primaryButton sportButton ${
          sportButtonClicked ? "mainButtonClicked" : ""
        }`}
        onClick={() => handleClickSport()}
      >
        <img
          src={sportButtonClicked ? sportClickedIcon : sportIcon}
          alt="sport"
        />
        <p>Sport</p>
      </button>
    </div>
  );
}

PrimaryCheckboxButton.propTypes = {
  setFinalResult: PropTypes.func.isRequired,
  fetchedResult: PropTypes.arrayOf(
    PropTypes.shape({ nature: PropTypes.string.isRequired }).isRequired
  ).isRequired,
  setCultureButtonClicked: PropTypes.func.isRequired,
  setSportButtonClicked: PropTypes.func.isRequired,
  cultureButtonClicked: PropTypes.bool.isRequired,
  sportButtonClicked: PropTypes.bool.isRequired,
};

export default PrimaryCheckboxButton;
