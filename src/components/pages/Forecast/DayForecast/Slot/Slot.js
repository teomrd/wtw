import React from "react";
import PropTypes from "prop-types";

const Slot = ({ temprature, date, weather }) => (
  <div className="column has-text-centered">
    <div>{date.getHours()}</div>
    <div>
      <img
        src={`http://openweathermap.org/img/w/${weather.icon}.png`}
        alt={weather.description}
      />
    </div>
    <div>{temprature.toFixed(1)}°</div>
  </div>
);

Slot.propTypes = {
  temprature: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date),
  weather: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default Slot;
