import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import "./App.css";
import "./Tvshows";
import "./Technologies";
import Technologies from "./Technologies";
import Details from "./Details/Details.js";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Switch>
            <Route exact path="/" component={Technologies} />
            <Route exact path="/not-found" component={NotFound} />
            <Route exact path="/:showId" component={Details} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
