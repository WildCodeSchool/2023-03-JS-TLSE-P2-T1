import PropTypes from "prop-types";
import "./PlaceEventsMenu.css";

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
    <div className="place-events-container">
      <button
        type="button"
        className={`placeEventsButton ${
          isPlaceChecked ? "placeEventsButtonClicked" : ""
        }`}
        onClick={() => handleClickPlace()}
      >
        Lieu
      </button>
      <button
        type="button"
        className={`placeEventsButton ${
          isEventChecked ? "placeEventsButtonClicked" : ""
        }`}
        onClick={() => handleClickEvent()}
      >
        Évènements
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
