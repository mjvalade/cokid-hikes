import React, { Component } from 'react';
import firebase from '../firebase';

function createTrailTemplate(trail = {}) {
  return Object.assign({
    trails: [],
    title: '',
    description: '',
    distance: '',
    elevation: '',
    notes: '',
    ranking: '',
    starred: false
  }, trail);
}

export default class NewTrail extends Component {
  constructor({ trail= {} }) {
    super();
    this.state = {
      trail: createTrailTemplate(trail)
    };
  }

  createTrail(e) {
    const { createTrailTemplate } = this.state;
    e.preventDefault();
    this.setState(createTrailTemplate());
  }

  render() {
    return(
      <section className="NewTrail">
        <form className="InputArea" onSubmit={() => this.createTrail(createTrailTemplate)}>
          <h1 className="NewTitle">Create a New Trail</h1>
          <label>
            Title
            <input type="text" name="title" placeholder="Enter title"/>
          </label>
          <label>
            Description
            <textarea type="text" name="description" placeholder="Enter trail description"/>
          </label>
          <label>
            Distance
            <input type="text" name="distance" placeholder="Enter distance"/>
          </label>
          <label>
            Elevation
            <input type="text" name="elevation" placeholder="Enter beginning/end elevation"/>
          </label>
          <label>
            Notes
            <textarea type="text" name="notes" placeholder="Enter notes about trail"/>
          </label>
        </form>
        <section className="MapRank">
          <p>Difficulty Ranking:</p>
          {/* star images */}
          <img src="" alt="map" className="TrailheadMap" />
        </section>
        <input type="submit" value="Save" />
        {/* on clicking Save should "Link to" /TrailList page */}
      </section>
    );
  };
}
