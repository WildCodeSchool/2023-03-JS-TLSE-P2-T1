import PropTypes from "prop-types";
import "./Card.css";
import { useState } from "react";

function Card({
  name,
  shortDescription,
  tags,
  address,
  schedules,
  api,
  isFiltersMenuVisible,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className={`${itemContainer} ${isFiltersMenuVisible ? "hidden" : ""}`}>
      {/* if the filters menu is visible, the itemcontainer class gets hidden class */}
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
        <button type="button" className="knowMore" onClick={openModal}>
          En savoir plus{" "}
        </button>
        {isModalOpen && (
          <div className="modalContainer">
            <div className="modalContent">
              <button
                type="button"
                className="closeButton"
                onClick={closeModal}
              >
                <img
                  src="/assets/close_icon.svg"
                  alt="Croix de fermeture"
                  className="closingCross"
                />
              </button>
              <h2>{name}</h2>
              <p>{shortDescription}</p>
              <p>{address}</p>
              <p>{tags}</p>
            </div>
          </div>
        )}
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
