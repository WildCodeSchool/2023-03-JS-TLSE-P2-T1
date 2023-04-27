import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ name, shortDescription, tags, address, schedules, api }) {
  let itemContainer;
  let imgSrc;
  if (api === "events") {
    itemContainer = "itemContainer";
    imgSrc = "src/assets/events.png";
  } else if (api === "stadiums") {
    itemContainer = "itemContainer2";
    imgSrc = "src/assets/stadium.png";
  } else {
    itemContainer = "itemContainer3";
    imgSrc = "src/assets/cinema.png";
  }

  return (
    <div className={itemContainer}>
      <div className="imageContainer">
        <img src={imgSrc} alt={name} className="imgCard" />
      </div>
      <div className="descriptionContainer">
        <h3>{name}</h3>
        {api !== "events" && <p>{schedules}</p>}
        {api === "events" && (
          <p className="shortDescriptionCard">{shortDescription}</p>
        )}
        <p>{address}</p>
        <p className="tagCard">{tags}</p>
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
};

export default Card;
