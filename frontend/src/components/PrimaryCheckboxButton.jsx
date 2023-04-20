import React, { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
function PrimaryCheckboxButton({ setFinalResult, fetchedResult }) {
  // defining two states for the buttons to know if they are clicked or not
  const [sportButtonClicked, setSportButtonClicked] = useState(false);
  const [cultureButtonClicked, setCultureButtonClicked] = useState(false);

  // defining four consts for the buttons icons url depending whether the button is clicked or not
  const cultureIcon = "..\\..\\..\\src\\assets\\header_icons\\culture.png";
  const cultureClickedIcon =
    "..\\..\\..\\src\\assets\\header_icons\\culture_clicked.png";
  const sportIcon = "..\\..\\..\\src\\assets\\header_icons\\sport.png";
  const sportClickedIcon =
    "..\\..\\..\\src\\assets\\header_icons\\sport_clicked.png";

  // handleClickCulture and handleClickSport definition, changes the state of the button (clicked or not)
  const handleClickCulture = () => {
    setCultureButtonClicked(!cultureButtonClicked);
  };

  const handleClickSport = () => {
    setSportButtonClicked(!sportButtonClicked);
  };

  // useEffect monitors any change on clicked state of the two buttons and filters fetched_result according to the buttons clicked
  useEffect(() => {
    if (
      // both buttons clicked or both buttons unclicked, returns all results
      (cultureButtonClicked && sportButtonClicked) ||
      (!cultureButtonClicked && !sportButtonClicked)
    ) {
      setFinalResult(fetchedResult);
      // two other cases : only one button is clicked, returns result depending on the button chosen. Applies filters
    } else if (cultureButtonClicked && !sportButtonClicked) {
      // eslint-disable-next-line react/prop-types
      const mainFilterResult = fetchedResult.filter(
        (result) => result.nature === "culture"
      );
      setFinalResult(mainFilterResult);
    } else if (!cultureButtonClicked && sportButtonClicked) {
      // eslint-disable-next-line react/prop-types
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

export default PrimaryCheckboxButton;
