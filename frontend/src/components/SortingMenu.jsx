import React from "react";
import PropTypes from "prop-types";
import "./SortingMenu.css";

function SortingMenu({ finalResult, setFinalResult }) {
  return (
    <div>
      <p>Trier par : </p>
      <select
        className="sorting-menu"
        onChange={(event) => {
          if (event.target.value === "alphabetical") {
            setFinalResult(
              finalResult.sort((a, b) => {
                if (a.nature < b.nature) {
                  return -1;
                }
                if (a.nature > b.nature) {
                  return 1;
                }
                return 0;
              })
            );
          } else if (event.target.value === "reverse-alphabetical") {
            setFinalResult(
              finalResult.sort((a, b) => {
                if (a.nature < b.nature) {
                  return 1;
                }
                if (a.nature > b.nature) {
                  return -1;
                }
                return 0;
              })
            );
          } else if (event.target.value === "most-recent") {
            setFinalResult(
              finalResult.sort((a, b) => {
                if (a.startingDate < b.startingDate) {
                  return 1;
                }
                if (a.startingDate > b.startingDate) {
                  return -1;
                }
                return 0;
              })
            );
          } else if (event.target.value === "oldest") {
            setFinalResult(
              finalResult.sort((a, b) => {
                if (a.startingDate < b.startingDate) {
                  return -1;
                }
                if (a.startingDate > b.startingDate) {
                  return 1;
                }
                return 0;
              })
            );
          }
        }}
      >
        <option value="alphabetical">Ordre alphabétique</option>
        <option value="reverse-alphabetical">Ordre alphabétique inverse</option>
        <option value="most-recent">Plus récent</option>
        <option value="oldest">Plus ancien</option>
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
