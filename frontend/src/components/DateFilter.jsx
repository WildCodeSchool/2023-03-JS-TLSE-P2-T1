import PropTypes from "prop-types";
import "./DateFilter.css";
import { useState } from "react";

function DateFilter({
  isDateChosen,
  setIsDateChosen,
  dateChosen,
  setDateChosen,
}) {
  const [isDateClicked, setIsDateClicked] = useState(false);
  const [isFlexibleClicked, setIsFlexibleClicked] = useState(false);

  // setIsDateChosen(false);
  return (
    <div className="dateContainer">
      <div className="radioContainer">
        <div className="choseDateContainer">
          <input
            type="radio"
            name="date"
            id="choseDate"
            onChange={() => {
              setIsDateChosen(true);
              setIsDateClicked(!isDateClicked);
              setIsFlexibleClicked(false);
            }}
          />
          <label
            htmlFor="choseDate"
            id={`${isDateClicked ? "dateDateClicked" : ""}`}
          >
            Choisir une date
          </label>
        </div>
        <div className="flexibleContainer">
          <input
            type="radio"
            name="date"
            id="flexible"
            onChange={() => {
              setIsDateChosen(false);
              setIsFlexibleClicked(!isFlexibleClicked);
              setIsDateClicked(false);
            }}
          />
          <label
            htmlFor="flexible"
            id={`${isFlexibleClicked ? "dateFlexibleClicked" : ""}`}
          >
            Je suis flexible
          </label>
        </div>
      </div>
      {isDateChosen ? (
        <input
          className="dateInput"
          type="date"
          value={dateChosen}
          onChange={(e) => {
            setDateChosen(e.target.value);
          }}
        />
      ) : null}
    </div>
  );
}

DateFilter.propTypes = {
  isDateChosen: PropTypes.bool.isRequired,
  setIsDateChosen: PropTypes.func.isRequired,
  dateChosen: PropTypes.string.isRequired,
  setDateChosen: PropTypes.func.isRequired,
};

export default DateFilter;
