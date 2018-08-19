import React from "react";
import DayForecast from "./DayForecast";
import { shallow } from "enzyme";

describe("<DayForecast />", () => {
  it("should display the day", () => {
    const dayForecast = shallow(<DayForecast day="Friday" />);
    expect(dayForecast.find("p").text()).toEqual("Friday");
  });
});
