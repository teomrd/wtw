import React from "react";
import DayForecast, { ForecastHeader } from "./DayForecast";
import { shallow } from "enzyme";
import Collapsible from "../../../../lib/Collapsible/Collapsible";
import Slots from "./Slots/Slots";

describe("<DayForecast />", () => {
  const props = {
    day: "Friday",
    maxTemprature: 32,
    minTemprature: 7,
    slots: {}
  };
  it("should display be a Collapsible component with a ForecastHeader and Slots", () => {
    const dayForecast = shallow(<DayForecast {...props} />);
    const collapsible = dayForecast.find(Collapsible);
    expect(collapsible.exists()).toBe(true);
    expect(collapsible.prop("item")).toEqual(
      <ForecastHeader
        day={props.day}
        maxTemprature={props.maxTemprature}
        minTemprature={props.minTemprature}
      />
    );
  });
});
