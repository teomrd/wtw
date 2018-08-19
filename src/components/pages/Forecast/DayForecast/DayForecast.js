import React from "react";
import PropTypes from "prop-types";

const DayForecast = ({ day }) => (
  <div>
    <p>{day}</p>
  </div>
);
DayForecast.propTypes = {
  day: PropTypes.string.isRequired
};

export default DayForecast;
