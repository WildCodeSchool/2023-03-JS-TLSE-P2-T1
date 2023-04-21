/* eslint-disable no-unused-vars */
import React, { useState } from "react";

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
            <p>{filterMainName}</p>|<p>{filterDateName}</p>
            {/* map the filterTagName element to display p */}
            {filterTagName.map((el) => (
              <p key={el}>| {el}</p>
            ))}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
