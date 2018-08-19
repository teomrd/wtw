import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Forecast from "./components/pages/Forecast/Forecast";

class App extends Component {
  render() {
    return (
      <div className="App blue-skies-gradient">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Whatever The Weather</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Forecast />
      </div>
    );
  }
}

export default App;
