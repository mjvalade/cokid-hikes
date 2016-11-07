import React, { Component } from 'react';

class TrailCard extends Component {

  goToDetails() {
    this.props.setSelectedTrail(this.props.uid);
    // use regex to take out whitespace in trail name and replace with hyphen
    this.context.router.transitionTo(`/Trail/${this.props.title}`);
  }

  render() {
    return(
      <section className="TrailCard"
      onClick={(e) => { this.goToDetails() }}
      >
        <img src="../public/assets/mountains-card.png" alt="landscape" className="TrailImg" />
        <section className="TopContainer">
          <h1 className="CardTitle">{this.props.title}</h1>
          <p className="CardMiles">{this.props.miles} miles</p>
        </section>
        <p className="CardDesc">{this.props.description}</p>
      </section>
    );

  }
}

TrailCard.contextTypes = {
  router: React.PropTypes.object
}

export default TrailCard;
