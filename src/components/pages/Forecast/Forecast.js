import React, { Component } from "react";
import PropTypes from "prop-types";
import config from "../../../config";
import api from "../../../services/api/api";

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    try {
      const response = await api.get(
        "http://api.openweathermap.org/data/2.5/forecast",
        {
          q: "glasgow,uk",
          appid: config.weatherApiKey
        }
      );
      this.setState({
        city: response.city.name,
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
