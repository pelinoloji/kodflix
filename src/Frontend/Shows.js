import React from "react";
import Tvshows from "./Tvshows";
import getShows from "./getShows";

class Shows extends React.Component {
  componentDidMount() {
    fetch("/rest/shows")
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
          {getShows().map(tvshows => (
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
