import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h3>Ooops! It looks like this page doesn't exist</h3>
      <Link to="/">Back to home page</Link>
    </div>
  );
}

export default NotFound;
