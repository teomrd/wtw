import React from "react";
import PropTypes from "prop-types";

const DayForecast = ({ day, maxTemprature, minTemprature }) => (
  <div>
    <h3>{day}</h3>
    <div style={{ float: "right" }}>
      {maxTemprature} °C {minTemprature} °C
    </div>
  </div>
);
DayForecast.propTypes = {
  day: PropTypes.string.isRequired,
  maxTemprature: PropTypes.number.isRequired,
  minTemprature: PropTypes.number.isRequired
};

export default DayForecast;
