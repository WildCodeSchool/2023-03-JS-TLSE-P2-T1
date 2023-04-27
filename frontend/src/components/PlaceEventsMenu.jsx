import PropTypes from "prop-types";

function PlaceEventsMenu({
  isPlaceChecked,
  setIsPlaceChecked,
  isEventChecked,
  setIsEventChecked,
}) {
  const handleClickPlace = () => {
    if (!isPlaceChecked && isEventChecked) {
      setIsEventChecked(!isEventChecked);
    }
    setIsPlaceChecked(!isPlaceChecked);
  };

  const handleClickEvent = () => {
    if (!isEventChecked && isPlaceChecked) {
      setIsPlaceChecked(!isPlaceChecked);
    }
    setIsEventChecked(!isEventChecked);
  };

  return (
    <div className="primaryCheckboxButtons">
      <button
        type="button"
        className={`primaryButton ${isPlaceChecked ? "mainButtonClicked" : ""}`}
        onClick={() => handleClickPlace()}
      >
        <p>Lieu</p>
      </button>
      <button
        type="button"
        className={`primaryButton ${isEventChecked ? "mainButtonClicked" : ""}`}
        onClick={() => handleClickEvent()}
      >
        <p>Évènements</p>
      </button>
    </div>
  );
}

PlaceEventsMenu.propTypes = {
  isPlaceChecked: PropTypes.bool.isRequired,
  setIsPlaceChecked: PropTypes.func.isRequired,
  isEventChecked: PropTypes.bool.isRequired,
  setIsEventChecked: PropTypes.func.isRequired,
};

export default PlaceEventsMenu;
