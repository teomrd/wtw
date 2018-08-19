import React, { Component } from "react";
import PropTypes from "prop-types";
import { ForecastClient } from "../../../services/clients/ForecastClient";
import DayForecast from "./DayForecast/DayForecast";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      days: {}
    };
  }

  async componentDidMount() {
    try {
      const response = await ForecastClient.getFiveDayForecast("glasgow");
      console.log("response", response);
      this.setState({
        city: response.city,
        days: response.days,
        error: undefined
      });
    } catch (e) {
      this.setState({
        error: e.message
      });
    }
    this.setState({
      loading: false
    });
  }

  getCurrentTemprature() {
    try {
      const slots = Object.values(this.state.days)[0].slots || {};
      return Object.values(slots)[0].temprature;
    } catch (e) {
      console.error(e);
    }
    return "-";
  }

  render() {
    const { city, temprature, loading, error, days } = this.state;
    return loading ? (
      <h1 className="title has-text-centered"> Loading...</h1>
    ) : (
      <div className="forecast">
        <section className="hero has-text-centered ">
          <div className="hero-body">
            <div className="container ">
              <h1 className="title is-1 has-text-white"> {city}</h1>
              <h2 className="subtitle is-3 has-text-white">
                {this.getCurrentTemprature()} °C
              </h2>
            </div>
          </div>
        </section>
        <strong>{error}</strong>
        <div>
          {Object.values(days).map(
            ({ day, minTemprature, maxTemprature, slots }, index) => (
              <DayForecast
                key={`${day}-${index}`}
                day={day}
                minTemprature={minTemprature}
                maxTemprature={maxTemprature}
                slots={slots}
              />
            )
          )}
        </div>
      </div>
    );
  }
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired
};

Forecast.defaultProps = {
  city: "Glasgow"
};

export default Forecast;
