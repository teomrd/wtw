import React from "react";
import PropTypes from "prop-types";
import Slot from "../Slot/Slot";

const Slots = ({ slots }) => (
  <div
    className="columns"
    style={{
      padding: "1% 0 1% 1%",
      borderTop: "1px solid",
      borderBottom: "1px solid"
    }}
  >
    {Object.keys(slots)
      .sort()
      .map(key => (
        <Slot
          key={key}
          temprature={slots[key].temprature}
          date={new Date(key)}
          weather={slots[key].weather}
        />
      ))}
  </div>
);

Slots.propTypes = {
  slots: PropTypes.object.isRequired
};
export default Slots;
