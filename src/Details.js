import React from "react";
import { Link } from "react-router-dom";

export default function Details() {
  return (
    <div>
      <h1>Hello, this will be the details page for each Movie & TV show :) </h1>
      <Link to="/"> Back to home page</Link>
    </div>
  );
}
