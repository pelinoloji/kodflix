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
            <div className="overlay">
              <h2>Angels in America</h2>
            </div>
          </div>
          <div className="item">
            <img src={boJackHorseman} alt="BoJack Horseman" />
            <div className="overlay">
              <h2>BoJack Horseman</h2>
            </div>
          </div>
          <div className="item">
            <img src={mrRobot} alt="Mr Robot" />
            <div className="overlay">
              <h2>Mr Robot</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="item">
            <img src={russianDoll} alt="Russian Doll" />
            <div className="overlay">
              <h2>Russian Doll</h2>
            </div>
          </div>
          <div className="item">
            <img src={sixFeetUnder} alt="Six Feet Under" />
            <div className="overlay">
              <h2>Six Feet Under</h2>
            </div>
          </div>
          <div className="item">
            <img src={westWorld} alt="Westworld" />
            <div className="overlay">
              <h2>Westworld</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
