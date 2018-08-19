import React from "react";
import PropTypes from "prop-types";
import Collapsible from "../../../../lib/Collapsible/Collapsible";

const ForecastHeader = ({
  toggle,
  expanded,
  day,
  maxTemprature,
  minTemprature
}) => (
  <div
    class="columns"
    onClick={toggle}
    style={{
      cursor: "pointer"
    }}
  >
    <h3 className="column">{day}</h3>
    <div className="column has-text-right">
      <div className="columns">
        <div className="column has-text-weight-bold">{maxTemprature} °C</div>
        <div className="column has-text-weight-light">{minTemprature} °C</div>
      </div>
    </div>
  </div>
);

ForecastHeader.propTypes = {
  day: PropTypes.string.isRequired,
  maxTemprature: PropTypes.number.isRequired,
  minTemprature: PropTypes.number.isRequired
};

const Slots = ({ slots }) => (
  <div
    className="columns"
    style={{
      padding: "2.5% 0 2.5% 2.5%",
      borderTop: "1px solid",
      borderBottom: "1px solid"
    }}
  >
    <div class="column">1 . dasinaso</div>
    <div class="column">2 . dasinaso</div>
    <div class="column">3 . dasinaso</div>
    <div class="column">4 . dasinaso</div>
    <div class="column">5 . dasinaso</div>
    <div class="column">6 . dasinaso</div>
    <div class="column">7 . dasinaso</div>
  </div>
);

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
