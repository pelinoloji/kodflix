import React from "react";

export default function Tvshows(props) {
  return (
    <div className="item">
      <img src={props.logo} alt={`${props.name} logo`} />
      <div className="overlay">
        <h3>{props.name}</h3>
      </div>
    </div>
  )
}