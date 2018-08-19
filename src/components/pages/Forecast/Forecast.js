import React, { Component } from "react";
import PropTypes from "prop-types";
import { ForecastClient } from "../../../services/clients/ForecastClient";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const response = await ForecastClient.getFiveDayForecast("glasgow");
      console.log("response", response);
      this.setState({
        city: response.city,
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
    const { city, temprature, loading, error } = this.state;
    return loading ? (
      <h1> Loading...</h1>
    ) : (
      <div>
        <h1>{city}</h1>
        <p>{temprature}</p>
        <strong>{error}</strong>
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