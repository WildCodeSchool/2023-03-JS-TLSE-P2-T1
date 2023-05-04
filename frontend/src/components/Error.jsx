import React from "react";
import Proptypes from "prop-types";
import "./Error.css";

function Error({ isError }) {
  return (
    <div className={`errorDisplay ${isError ? "hidden" : ""}`}>
      <p>Le site a reçu trop de requêtes pour aujourd'hui, à demain !</p>
    </div>
  );
}

Error.propTypes = {
  isError: Proptypes.bool.isRequired,
};

export default Error;
