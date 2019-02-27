import React, { Component } from "react";
import lordoftherings from "./lord-of-the-rings.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={lordoftherings} alt="lord of the rings" />
      </div>
    );
  }
}

export default App;
