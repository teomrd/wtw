import React, { Component } from "react";
import "./App.css";
import Forecast from "./components/pages/Forecast/Forecast";

class App extends Component {
  render() {
    return (
      <div className="App blue-skies-gradient">
        <Forecast />
      </div>
    );
  }
}

export default App;
