import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./Tvshows";
import "./Technologies";
import Technologies from "./Technologies";
import Details from "./Details";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Technologies} />
          <Route exact path="/:details" component={Details} />
        </div>
      </Router>
    );
  }
}

export default App;
