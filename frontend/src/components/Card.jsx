import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({
  name,
  shortDescription,
  tags,
  address,
  schedules,
  api,
  isFiltersMenuVisible,
}) {
  let itemContainer;
  let imgSrc;
  if (api === "events") {
    itemContainer = "itemContainer";
    imgSrc = "/assets/events.png";
  } else if (api === "stadiums") {
    itemContainer = "itemContainer2";
    imgSrc = "/assets/stadium.png";
  } else {
    itemContainer = "itemContainer3";
    imgSrc = "/assets/cinema.png";
  }

  return (
    // if the filters menu is visible, the itemcontainer class gets hidden class
    <div className={`${itemContainer} ${isFiltersMenuVisible ? "hidden" : ""}`}>
      <div className="imageContainer">
        <img src={imgSrc} alt={name} className="imgCard" />
      </div>
      <div className="descriptionContainer">
        <h3>{name}</h3>
        {api !== "events" && <p>{schedules}</p>}
        {api === "events" && (
          <p className="shortDescriptionCard">{shortDescription}</p>
        )}
        <p className="addressCard">{address}</p>
        <p className="tagCard">{tags}</p>
        <button type="button" className="knowMore">
          En savoir plus{" "}
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  address: PropTypes.string.isRequired,
  schedules: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  isFiltersMenuVisible: PropTypes.bool.isRequired,
};

export default Card;
