import { useMap, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import "./CustomPopup.css";

function CustomPopup({ el }) {
  const map = useMap();
  const maxHeight = Math.floor(map.getSize().y * 0.7);
  const maxWidth = Math.floor(map.getSize().x * 0.7);

  return (
    <Popup maxWidth={maxWidth} maxHeight={maxHeight}>
      <div className="popup">
        <h3 className="namePopup">{el.name}</h3>
        <p className="tagCards tagsPopup">
          {el.tags ? <span className="tagCard">{el.tags}</span> : null}
          {el.nature ? <span className="natureCard">{el.nature}</span> : null}
        </p>
        {el.shortDescription ? (
          <p className="shortDescPopup">Résumé:{el.shortDescription}</p>
        ) : null}
        {el.schedules ? <p className="schedulesPopup">{el.schedules}</p> : null}
        {el.longDescription ? (
          <p className="longDescPopup">{el.longDescription}</p>
        ) : null}
        {el.phone ? <p className="annexPopup">☎️ : {el.phone}</p> : null}
        {el.email ? <p className="annexPopup">📧 : {el.email}</p> : null}
        {el.address ? <p className="annexPopup">{el.address}</p> : null}
        {el.access ? <p className="annexPopup">Accès 🚇: {el.access}</p> : null}
      </div>
    </Popup>
  );
}

CustomPopup.propTypes = {
  el: PropTypes.shape({
    name: PropTypes.string.isRequired,
    schedules: PropTypes.string,
    shortDescription: PropTypes.string,
    longDescription: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    access: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    nature: PropTypes.string,
  }).isRequired,
};

export default CustomPopup;
