import React from "react";
import PropTypes from "prop-types";

const DayForecast = ({ day, maxTemprature, minTemprature }) => (
  <div class="columns">
    <h3 className="column">{day}</h3>
    <div className="column has-text-right">
      <div className="columns">
        <div className="column has-text-weight-bold">{maxTemprature} °C</div>
        <div className="column has-text-weight-light">{minTemprature} °C</div>
      </div>
    </div>
  </div>
);
DayForecast.propTypes = {
  day: PropTypes.string.isRequired,
  maxTemprature: PropTypes.number.isRequired,
  minTemprature: PropTypes.number.isRequired
};

export default DayForecast;
