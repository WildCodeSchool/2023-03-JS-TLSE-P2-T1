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
  longDescription,
  phone,
  email,
  nature,
  access,
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

  // prevents body to be scrollable when modal is open

  if (isModalOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }

  return (
    <div className={`${itemContainer} ${isFiltersMenuVisible ? "hidden" : ""}`}>
      {/* if the filters menu is visible, the itemcontainer class gets hidden class */}
      <div className="imageContainer">
        <img src={imgSrc} alt={name} className="imgCard" />
      </div>
      <div className="descriptionContainer">
        <h3>{name}</h3>
        {shortDescription ? (
          <p className="shortDescriptionCard">{shortDescription}</p>
        ) : null}
        {address.length !== 0 ? (
          <p className="addressCard"> 📍{address}</p>
        ) : null}
        <p className="tagCard">
          {tags} {nature}
        </p>
        <button type="button" className="knowMore" onClick={openModal}>
          En savoir plus{" "}
        </button>
        {/* contain of Modal card */}
        {isModalOpen && (
          <div>
            <button
              className="modalContainer"
              type="button"
              onClick={closeModal}
            >
              <p>.</p>
            </button>
            <div className="modalContent">
              <div className="crossContainer">
                <button type="button" onClick={closeModal}>
                  <img
                    src="/assets/close_icon.svg"
                    alt="Croix de fermeture"
                    className="closingCross"
                  />
                </button>
              </div>
              <div className="imageContainerModal">
                <img src={imgSrc} alt={name} className="imgModal" />
              </div>
              <h3>{name}</h3>
              {shortDescription ? <p>Résumé:{shortDescription}</p> : null}
              {schedules ? <p>{schedules}</p> : null}
              {longDescription ? <p>{longDescription}</p> : null}
              {phone ? <p>☎️:{phone}</p> : null}
              {email ? <p>📧{email}</p> : null}
              {address ? <p>{address}</p> : null}
              {access ? <p>Accès 🚇: {access}</p> : null}
              <p className="tagCard">{tags}</p>
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
  longDescription: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  access: PropTypes.string.isRequired,
  nature: PropTypes.string.isRequired,
  isFiltersMenuVisible: PropTypes.bool.isRequired,
};

export default Card;
