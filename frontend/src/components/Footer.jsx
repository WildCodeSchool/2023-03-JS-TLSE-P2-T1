import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer>
        <p>© myTouloulist 2023</p>
        {/* add <p onClick={handleAboutUsClick} className="about-us"> with a key event listener */}
        <button type="button" className="about-us">
          About us
        </button>
      </footer>
    </div>
  );
}

export default Footer;
