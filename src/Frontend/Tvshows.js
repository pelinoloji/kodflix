import React from "react";
import { Link } from "react-router-dom";


function Tvshows(props) {
  return (
    <Link to={`/${props.id}`} className="item">
      <img src={props.logo} alt={`${props.name} logo`} />
      <div className="overlay">
        <h3>{props.name}</h3>
      </div>
    </Link>
  );
}

export default Tvshows;
