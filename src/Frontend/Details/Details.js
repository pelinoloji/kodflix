import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Details.css";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: {}
    };
  }

  componentDidMount() {
    //special function
    let showId = this.props.match.params.showId;
    
    fetch('/rest/shows')
    .then(res => res.json())
    .then(shows => {
      return shows
        .find(show => {
          return show.id === showId
        })
    })
    .then(show => {
        const {id, name, logo, details} = show;
        this.setState({
        id: id,
        name: name,
        logo: logo,
        details: details
      })})
  }

  render() {
    if (this.state.shows === undefined) {
      return <Redirect to="/not-found" />;
    } else {
      return (
        <div className="Details">
          <h1>{this.state.name}</h1>
          <div className="container">
            <div className="text">{this.state.id}</div>
            <div className="text">{this.state.details}</div>
            <img src={require(`./../common/images/${this.props.match.params.showId}.jpg`)} alt={this.props.match.params.showId} className="image" />
          </div>
          <br />
          <br />
          <Link to="/">Back to home page</Link>
        </div>
      );
    }
  }
}

export default Details;
