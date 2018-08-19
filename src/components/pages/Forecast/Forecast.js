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

  render() {
    const { city, temprature, loading, error, days } = this.state;
    return loading ? (
      <h1> Loading...</h1>
    ) : (
      <div className="forecast">
        <h1 style={{ textAlign: "center" }}>{city}</h1>
        <p>{temprature}</p>
        <strong>{error}</strong>
        <div>
          {Object.values(days).map(({ day }, index) => (
            <DayForecast key={`${day}-${index}`} day={day} />
          ))}
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
