import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="item">Six Feet Under</div>
          <div className="item">Russian Doll</div>
          <div className="item">Mr Robot</div>
        </div>
        <div className="container">
          <div className="item">Angels in America</div>
          <div className="item">BoJack Horseman</div>
          <div className="item">WestWorld</div>
        </div>
      </div>
    );
  }
}

export default App;
