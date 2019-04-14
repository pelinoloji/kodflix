import React, { Component} from "react";
import { Link } from "react-router-dom";
import getTechnologies from './getTechnologies';


export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      shows: {}
    };
  }
    
  componentDidMount() { //special function
    let showId = this.props.match.params.showId;
    let shows = getTechnologies()
      .find(show => show.id === showId);
    this.setState({ shows });
}


  render() {
    return (
      <div>
        <h1>{this.state.shows.name}</h1>
        <Link to="/"> Back to home page</Link>
    </div>
    );
  }
}


