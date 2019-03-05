import React, { Component } from "react";
import "./App.css";
import angelsInAmerica from "./images/angels-in-america.jpg";
import boJackHorseman from "./images/bojack-horseman.jpg";
import mrRobot from "./images/mr-robot.jpg";
import russianDoll from "./images/russian-doll.jpg";
import sixFeetUnder from "./images/six-feet-under.jpg";
import westWorld from "./images/westworld.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="item">
            <img src={angelsInAmerica} alt="Angels in America" />
          </div>
          <div className="item">
            <img src={boJackHorseman} alt="BoJack Horseman" />
          </div>
          <div className="item">
            <img src={mrRobot} alt="Mr Robot" />
          </div>
        </div>
        <div className="container">
          <div className="item">
            <img src={russianDoll} alt="Russian Doll" />
          </div>
          <div className="item">
            <img src={sixFeetUnder} alt="Six Feet Under" />
          </div>
          <div className="item">
            <img src={westWorld} alt="Westworld" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
