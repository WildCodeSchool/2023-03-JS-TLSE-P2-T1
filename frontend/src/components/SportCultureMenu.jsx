import PropTypes from "prop-types";
import "./SportCultureMenu.css";

function SportCultureMenu({
  isSportChecked,
  setIsSportChecked,
  isCultureChecked,
  setIsCultureChecked,
}) {
  // defining four consts for the buttons icons url depending whether the button is clicked or not
  const cultureIcon = "\\assets\\header_icons\\culture.png";
  const cultureClickedIcon = "\\assets\\header_icons\\culture_clicked.png";
  const sportIcon = "\\assets\\header_icons\\sport.png";
  const sportClickedIcon = "\\assets\\header_icons\\sport_clicked.png";

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
    <div className="sport-culture-container">
      <button
        type="button"
        className={`cultureButton ${
          isCultureChecked ? "sport-culture-clicked" : ""
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
        className={`sportButton ${
          isSportChecked ? "sport-culture-clicked" : ""
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
