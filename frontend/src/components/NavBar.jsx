/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [filterMainName, setFilterMainName] = useState("Culture et Sport");
  const [filterDateName, setFilterDateName] = useState("Flexible");
  const [filterTagName, setFilterTagName] = useState([
    "Tag 1",
    "Tag 2",
    "Tag 3",
  ]);

  return (
    <nav>
      <ul>
        {/* define a li containing logo and website name */}
        <li>
          <img src="../src/assets/myLogo.png" alt="Logo MyTouloulist" />
          <h1>myTouloulist</h1>
        </li>
        <li>
          <button type="button">
            <img
              src="../src/assets/filter_icon.png"
              alt="filter button icon"
              id="filter_icon"
            />
            <div className="header_filters">
              <div className="header_main_filters">
                <p>{filterMainName} | </p>
                <p>{filterDateName}</p>
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

export default NavBar;
