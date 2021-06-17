import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner" id="spinner">
      <span className="loading-spinner__item"></span>
      <span className="loading-spinner__item"></span>
      <span className="loading-spinner__item"></span>
      <span className="loading-spinner__item"></span>
    </div>
  );
};

export default LoadingSpinner;
