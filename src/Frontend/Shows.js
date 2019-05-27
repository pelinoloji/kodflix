import React from "react";
import Tvshows from "./Tvshows";

class Shows extends React.Component {
  componentDidMount() {
    fetch("/rest/shows")
    .then(res => res.json())
    .then(shows => this.setState ({ shows }));
  }

  render() {
    return (
      <div>
        <div className="container">
          { this.state.shows.map( tvshows => (
            <Tvshows
              key={tvshows.id}
              id={tvshows.id}
              name={tvshows.name}
              logo={tvshows.logo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Shows;
