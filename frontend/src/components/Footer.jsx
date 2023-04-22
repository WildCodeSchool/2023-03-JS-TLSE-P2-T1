import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      {/* footer containing a p with "copyright 2023" on the left and a link "About us" on the right */}
      <footer>
        <p>© 2023</p>
        <a href="www.google.fr">About us</a>
      </footer>
    </div>
  );
}

export default Footer;
