import React from "react";
import Proptypes from "prop-types";
import "./Error.css";

function Error({ isError }) {
  return (
    <div className={`errorDisplay ${!isError ? "hidden" : ""}`}>
      <p id="oups">Oups !</p>
      <p id="errorText">
        Le site data.toulouse-metropole.fr a eu trop de requêtes pour
        aujourd'hui... Revenez-demain !
      </p>
    </div>
  );
}

Error.propTypes = {
  isError: Proptypes.bool.isRequired,
};

export default Error;
