import React, { Component } from "react";
import { BrowseRouter as Router } from 'react-router-dom';
import "./App.css";
import "./Tvshows";
import "./Technologies";
import Technologies from "./Technologies";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Technologies />
      </div>
    );
  }
}

export default App;
