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
          } else if (event.target.value === "reverse-alphabetical") {
            const reverseAlphabeticalSort = [...finalResult].sort((a, b) => {
              if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              }
              return 0;
            });
            setFinalResult(reverseAlphabeticalSort);
          }
        }}
      >
        <option value="date">Date</option>
        <option value="alphabetical">Ordre alphabétique</option>
        <option value="reverse-alphabetical">Ordre alphabétique inverse</option>
        <option value="category">Catégorie</option>
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
