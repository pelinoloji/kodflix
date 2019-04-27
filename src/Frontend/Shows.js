import React from "react";
import Tvshows from "./Tvshows";
import getShows from './getShows';


 function Shows() {
  return (
    <div>
      <div className="container">
        {
          getShows().map(tvshows => (
          <Tvshows 
          key={tvshows.id}
          id={tvshows.id} 
          name={tvshows.name} 
          logo={tvshows.logo} />
        ))
        }
      </div>
    </div>
  );
}

export default Shows;
