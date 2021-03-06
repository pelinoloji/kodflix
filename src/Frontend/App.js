import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "./Tvshows";
import Shows from "./Shows";
import Details from "./Details/Details.js";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={ Shows } />
            <Route exact path="/not-found" component={ NotFound } />
            <Route exact path="/:showId" component={ Details } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
