import { useMap, Popup } from "react-leaflet";
import PropTypes from "prop-types";

function CustomPopup({ el }) {
  const map = useMap();
  const maxHeight = Math.floor(map.getSize().y * 0.8);
  const maxWidth = Math.floor(map.getSize().x * 0.8);

  return (
    <Popup maxWidth={maxWidth} maxHeight={maxHeight}>
      <h3>{el.name}</h3>
      {el.shortDescription ? <p>Résumé:{el.shortDescription}</p> : null}
      {el.schedules ? <p>{el.schedules}</p> : null}
      {el.longDescription ? <p>{el.longDescription}</p> : null}
      {el.phone ? <p>☎️:{el.phone}</p> : null}
      {el.email ? <p>📧{el.email}</p> : null}
      {el.address ? <p>{el.address}</p> : null}
      {el.access ? <p>Accès 🚇: {el.access}</p> : null}
      <p className="tagCard">{el.tags}</p>
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
  }).isRequired,
};

export default CustomPopup;
