import React from "react";

function NavBar() {
  return (
    <nav>
      <ul>
        {/* define a li containing logo and website name */}
        <li>
          <img src="..\assets\myTouloulistLogo.png" alt="Logo MyTouloulist" />
          <h1>myTouloulist</h1>
        </li>
        <li>
          <button type="button">Filter</button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
