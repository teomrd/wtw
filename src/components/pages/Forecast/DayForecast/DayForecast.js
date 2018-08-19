import React from "react";
import PropTypes from "prop-types";
import Collapsible from "../../../../lib/Collapsible/Collapsible";
import Slots from "./Slots/Slots";

export const ForecastHeader = ({
  toggle,
  expanded,
  day,
  maxTemprature,
  minTemprature
}) => (
  <div
    className="columns"
    onClick={toggle}
    style={{
      cursor: "pointer"
    }}
  >
    <h3 className="column">{day}</h3>
    <div className="column has-text-right">
      <div className="columns">
        <div className="column has-text-weight-bold">
          {maxTemprature.toFixed(1)}°
        </div>
        <div className="column has-text-weight-light">
          {minTemprature.toFixed(1)}°
        </div>
      </div>
    </div>
  </div>
);

ForecastHeader.propTypes = {
  day: PropTypes.string.isRequired,
  maxTemprature: PropTypes.number.isRequired,
  minTemprature: PropTypes.number.isRequired
};

const DayForecast = ({ day, maxTemprature, minTemprature, slots }) => (
  <Collapsible
    item={
      <ForecastHeader
        day={day}
        maxTemprature={maxTemprature}
        minTemprature={minTemprature}
      />
    }
  >
    <Slots slots={slots} />
  </Collapsible>
);

DayForecast.propTypes = {
  day: PropTypes.string.isRequired,
  maxTemprature: PropTypes.number.isRequired,
  minTemprature: PropTypes.number.isRequired
};

export default DayForecast;
