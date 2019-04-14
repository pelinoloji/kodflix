import React, { Component} from "react";
import { Link, Redirect } from "react-router-dom";
import getTechnologies from './getTechnologies';


class Details extends Component {

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
    if(this.state.shows === undefined) {
      return <Redirect to='/not-found' />;
    } else {
      return (
        <div>
          <h1>{this.state.shows.name}</h1>
          <Link to="/">Back to home page</Link>
      </div>
      );
    }
    
  }
}

export default Details;
