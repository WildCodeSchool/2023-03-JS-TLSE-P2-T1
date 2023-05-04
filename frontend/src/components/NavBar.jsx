/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./NavBar.css";

function NavBar({
  isFiltersMenuVisible,
  setIsFiltersMenuVisible,
  navbarDisplayedTags,
  setCultureButtonClicked,
  setSportButtonClicked,
  navbarSportCulture,
  navbarDate,
}) {
  const [filterTagName, setFilterTagName] = useState([]);

  useEffect(() => {
    if (navbarDisplayedTags.length === 0) {
      setFilterTagName(["Tous types d'activités"]);
    } else {
      setFilterTagName(navbarDisplayedTags);
    }
  }, [navbarDisplayedTags]);

  return (
    <nav>
      <ul>
        {/* define a li containing logo and website name */}
        <li>
          <img src="/assets/myLogo.png" alt="Logo MyTouloulist" id="logo" />
          <h1>myTouloulist</h1>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setIsFiltersMenuVisible(!isFiltersMenuVisible);
              setCultureButtonClicked(false);
              setSportButtonClicked(false);
            }}
          >
            <img
              src="/assets/filter_icon.png"
              alt="filter button icon"
              id="filter_icon"
            />
            <div className="header_filters">
              <div className="header_main_filters">
                <p>{navbarSportCulture}</p>
                <p id="navbar-date">| {navbarDate}</p>
              </div>
              <div className="header_tags_filters">
                {/* map the filterTagName element to display p */}
                {filterTagName.map((el) => (
                  <p key={el}>| {el}</p>
                ))}
              </div>
            </div>
          </button>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  isFiltersMenuVisible: PropTypes.bool.isRequired,
  setIsFiltersMenuVisible: PropTypes.func.isRequired,
  navbarDisplayedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCultureButtonClicked: PropTypes.func.isRequired,
  setSportButtonClicked: PropTypes.func.isRequired,
  navbarSportCulture: PropTypes.string.isRequired,
  navbarDate: PropTypes.string.isRequired,
};

export default NavBar;
