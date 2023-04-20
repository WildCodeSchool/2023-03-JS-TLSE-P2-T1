import { useState } from "react";

function DateFilter() {
  const [isChosen, setIsChosen] = useState(false);

  return (
    <div>
      <input
        type="radio"
        name="date"
        id="choseDate"
        onChange={() => setIsChosen(true)}
      />
      <label htmlFor="choseDate">Choisir une date</label>
      <input
        type="radio"
        name="date"
        id="flexible"
        onChange={() => setIsChosen(false)}
      />
      <label htmlFor="flexible">Je suis flexible</label>
      {isChosen ? <input type="date" /> : null}
    </div>
  );
}

export default DateFilter;
