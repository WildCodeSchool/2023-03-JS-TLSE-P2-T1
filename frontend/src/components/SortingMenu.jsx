import React from "react";
import PropTypes from "prop-types";
import "./SortingMenu.css";

function SortingMenu({ finalResult, setFinalResult }) {
  return (
    <div>
      <p>Trier par : </p>
      <select
        className="sorting-menu"
        defaultValue="date"
        onChange={(event) => {
          if (event.target.value === "alphabetical") {
            const alphabeticalSort = [...finalResult].sort((a, b) => {
              if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
            });
            setFinalResult(alphabeticalSort);
          } else if (event.target.value === "date") {
            const sortedByDate = [...finalResult].sort((a, b) => {
              // declaring now as today's date
              const now = new Date().getTime();

              // declaring aDate as the minimum difference between (starting date or ending date) and today
              let aDate = null;
              // if both starting date and ending date exist, aDate is the minimum difference between both and today
              if (a.startingDate && a.endingDate) {
                const diff1 = Math.abs(
                  new Date(a.startingDate).getTime() - now
                );
                const diff2 = Math.abs(new Date(a.endingDate).getTime() - now);
                aDate = Math.min(diff1, diff2);
                // if only starting date exists, aDate is the difference between starting date and today
              } else if (a.startingDate) {
                aDate = Math.abs(new Date(a.startingDate).getTime() - now);
                // if only ending date exists, aDate is the difference between ending date and today
              } else if (a.endingDate) {
                aDate = Math.abs(new Date(a.endingDate).getTime() - now);
              }
              // declaring bDate as the minimum difference between (starting date or ending date) and today
              let bDate = null;
              // if both starting date and ending date exist, bDate is the minimum difference between both and today
              if (b.startingDate && b.endingDate) {
                const diff1 = Math.abs(
                  new Date(b.startingDate).getTime() - now
                );
                const diff2 = Math.abs(new Date(b.endingDate).getTime() - now);
                bDate = Math.min(diff1, diff2);
                // if only starting date exists, bDate is the difference between starting date and today
              } else if (b.startingDate) {
                bDate = Math.abs(new Date(b.startingDate).getTime() - now);
                // if only ending date exists, bDate is the difference between ending date and today
              } else if (b.endingDate) {
                bDate = Math.abs(new Date(b.endingDate).getTime() - now);
              }
              // if both aDate and bDate exist, sort by minimum difference between both and today
              return aDate !== null && bDate !== null
                ? aDate - bDate
                : // if only aDate exists, sort by aDate
                  (aDate === null ? 1 : -1) || a.nature.localeCompare(b.nature);
            });

            setFinalResult(sortedByDate);
          }
        }}
      >
        <option value="date">Date</option>
        <option value="alphabetical">Nom</option>
        <option value="city-center">Proche du centre</option>
      </select>
    </div>
  );
}

export default SortingMenu;

SortingMenu.propTypes = {
  finalResult: PropTypes.arrayOf(
    PropTypes.shape({ nature: PropTypes.string.isRequired }).isRequired
  ).isRequired,
  setFinalResult: PropTypes.func.isRequired,
};
