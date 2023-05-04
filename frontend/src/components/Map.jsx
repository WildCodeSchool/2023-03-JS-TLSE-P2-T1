// eslint-disable-next-line import/no-extraneous-dependencies
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import PropTypes from "prop-types";
import "./Map.css";
import CustomPopup from "./CustomPopup";

function Map({ finalResult }) {
  return (
    <MapContainer id="map" center={[43.604429, 1.443812]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {finalResult.map((el) =>
        el.coordinates ? (
          <Marker key={el.id} position={[el.coordinates[0], el.coordinates[1]]}>
            <CustomPopup el={el} />
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
}

Map.propTypes = {
  finalResult: PropTypes.arrayOf(
    PropTypes.shape({
      api: PropTypes.string,
      name: PropTypes.string,
      schedules: PropTypes.string,
      shortDescription: PropTypes.string,
    })
  ).isRequired,
};

export default Map;
