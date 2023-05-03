import PropTypes from "prop-types";
import "./DateFilter.css";

function DateFilter({
  isDateChosen,
  setIsDateChosen,
  dateChosen,
  setDateChosen,
}) {
  return (
    <div className="dateContainer">
      <div className="radioContainer">
        <div className="choseDateContainer">
          <input
            type="radio"
            name="date"
            id="choseDate"
            onChange={() => setIsDateChosen(true)}
          />
          <label htmlFor="choseDate">Choisir une date</label>
        </div>
        <div className="flexibleContainer">
          <input
            type="radio"
            name="date"
            id="flexible"
            onChange={() => setIsDateChosen(false)}
          />
          <label htmlFor="flexible">Je suis flexible</label>
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
