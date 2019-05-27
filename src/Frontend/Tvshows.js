import React from "react";
import { Link } from "react-router-dom";


function Tvshows(tvshows) {
  return (
    <Link to={`/${tvshows.id}`} className="item">
      <img src={require(`./../common/images/${tvshows.id}.jpg`)} alt={`${tvshows.name} logo`} />
      <div className="overlay">
        <h3>{tvshows.name}</h3>
      </div>
    </Link>
  );
}

export default Tvshows;
