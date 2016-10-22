import React, { Component } from 'react';

export default class NewTrail extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <section className="NewTrail">
        <section className="InputArea">
          <h1 className="NewTitle">Create a New Trail</h1>
          <p>Title</p>
          <input type="text" name="name" value="" placeholder="Enter title"/>
          <p>Description</p>
          <textarea type="text" name="name" value="" placeholder="Enter trail description"/>
          <p>Distance</p>
          <input type="text" name="name" value="" placeholder="Enter distance"/>
          <p>Elevation</p>
          <input type="text" name="name" value="" placeholder="Enter beginning-end elevation"/>
          <p>Notes</p>
          <textarea type="text" name="name" value="" placeholder="Enter notes about trail"/>
        </section>
        <section className="MapRank">
          <p>Difficulty Ranking:</p>
          {/* star images */}
          <img src="" alt="map" className="TrailheadMap" />
        </section>
      </section>
    );
  }
}
