import PropTypes from "prop-types";

function DateFilter({
  isDateChosen,
  setIsDateChosen,
  dateChosen,
  setDateChosen,
}) {
  return (
    <div>
      <input
        type="radio"
        name="date"
        id="choseDate"
        onChange={() => setIsDateChosen(true)}
      />
      <label htmlFor="choseDate">Choisir une date</label>
      <input
        type="radio"
        name="date"
        id="flexible"
        onChange={() => setIsDateChosen(false)}
      />
      <label htmlFor="flexible">Je suis flexible</label>
      {isDateChosen ? (
        <input
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
