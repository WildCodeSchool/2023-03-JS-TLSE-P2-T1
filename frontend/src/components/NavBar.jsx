import React, { useState } from "react";

function NavBar() {
  const [filterMainName, setFilterMainName] = useState("Culture et Sport");
  const [filterDateName, setFilterDateName] = useState("Flexible");
  const [filterTagName, setFilterTagName] = useState(["Tag 1"]);

  // use setFilterMainName to change the name of the main filter into "Culture et Sport"
  // use setFilterDateName to change the name of the date filter into "Flexible"
  // use setFilterTagName to change the name of the tag filter into "Tag 1"
  setFilterDateName("Flexible");
  setFilterTagName(["Tag 1", "Tag 2", "Tag 3"]);
  setFilterMainName("Culture et Sport");

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
            <p>{filterMainName}</p>
            <p>{filterDateName}</p>
            {/* map the filterTagName element to display p */}
            {filterTagName.map((el) => (
              <p>{el}</p>
            ))}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
