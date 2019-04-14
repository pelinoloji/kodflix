import React from "react";
import Tvshows from "./Tvshows";
import getTechnologies from './getTechnologies';


 function Technologies() {
  return (
    <div>
      <div className="container">
        {
          getTechnologies().map(tvshows => (
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

export default Technologies;
