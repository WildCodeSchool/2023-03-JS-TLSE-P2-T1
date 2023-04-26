import PropTypes from "prop-types";

function SportCultureMenu({
  isSportChecked,
  setIsSportChecked,
  isCultureChecked,
  setIsCultureChecked,
}) {
  // defining four consts for the buttons icons url depending whether the button is clicked or not
  const cultureIcon = "..\\..\\..\\src\\assets\\header_icons\\culture.png";
  const cultureClickedIcon =
    "..\\..\\..\\src\\assets\\header_icons\\culture_clicked.png";
  const sportIcon = "..\\..\\..\\src\\assets\\header_icons\\sport.png";
  const sportClickedIcon =
    "..\\..\\..\\src\\assets\\header_icons\\sport_clicked.png";

  const handleClickCulture = () => {
    if (!isCultureChecked && isSportChecked) {
      setIsSportChecked(!isSportChecked);
    }
    setIsCultureChecked(!isCultureChecked);
  };

  const handleClickSport = () => {
    if (!isSportChecked && isCultureChecked) {
      setIsCultureChecked(!isCultureChecked);
    }
    setIsSportChecked(!isSportChecked);
  };

  return (
    <div className="primaryCheckboxButtons">
      <button
        type="button"
        className={`primaryButton cultureButton ${
          isCultureChecked ? "mainButtonClicked" : ""
        }`}
        onClick={() => handleClickCulture()}
      >
        {/* displaying one icon or the other depending on button status : clicked or not */}
        <img
          src={isCultureChecked ? cultureClickedIcon : cultureIcon}
          alt="culture"
        />
        <p>Culture</p>
      </button>
      <button
        type="button"
        className={`primaryButton sportButton ${
          isSportChecked ? "mainButtonClicked" : ""
        }`}
        onClick={() => handleClickSport()}
      >
        <img src={isSportChecked ? sportClickedIcon : sportIcon} alt="sport" />
        <p>Sport</p>
      </button>
    </div>
  );
}

SportCultureMenu.propTypes = {
  isSportChecked: PropTypes.bool.isRequired,
  setIsSportChecked: PropTypes.func.isRequired,
  isCultureChecked: PropTypes.bool.isRequired,
  setIsCultureChecked: PropTypes.func.isRequired,
};

export default SportCultureMenu;
