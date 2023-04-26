import { useState } from "react";
import PropTypes from "prop-types";

function DateFilter({ setDateFilter }) {
  const [isCustomDateChosen, setIsCustomDateChosen] = useState(false);

  return (
    <div>
      <input
        type="radio"
        name="date"
        id="choseDate"
        onChange={() => setIsCustomDateChosen(true)}
      />
      <label htmlFor="choseDate">Choisir une date</label>
      <input
        type="radio"
        name="date"
        id="flexible"
        onChange={() => setIsCustomDateChosen(false)}
      />
      <label htmlFor="flexible">Je suis flexible</label>
      {isCustomDateChosen ? (
        <input type="date" onChange={(e) => setDateFilter(e.target.value)} />
      ) : null}
    </div>
  );
}

DateFilter.propTypes = {
  setDateFilter: PropTypes.func.isRequired,
};

export default DateFilter;
