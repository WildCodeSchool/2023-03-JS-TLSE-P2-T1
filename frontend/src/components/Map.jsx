// eslint-disable-next-line import/no-extraneous-dependencies
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import "./Map.css";

function Map({ finalResult }) {
  return (
    <MapContainer
      id="map"
      center={[43.592328, 1.444702]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {finalResult.map((el) =>
        el.coordinates ? (
          <Marker key={el.id} position={[el.coordinates[0], el.coordinates[1]]}>
            <Popup>
              <div>
                <h3>{el.name}</h3>
                {el.api !== "events" && <p>{el.schedules}</p>}
                {el.api === "events" && (
                  <p className="shortDescriptionCard">{el.shortDescription}</p>
                )}
                <p className="addressCard">{el.address}</p>
                <p className="tagCard">{el.tags}</p>
                <button type="button" className="knowMore">
                  En savoir plus{" "}
                </button>
              </div>
            </Popup>
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
