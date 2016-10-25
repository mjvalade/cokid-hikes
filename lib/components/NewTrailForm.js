import React, { Component } from 'react';
import firebase from '../firebase';

// function createTrailTemplate(trail = {}) {
//   return Object.assign({
//     trails: [],
//     title: '',
//     description: '',
//     distance: '',
//     elevation: '',
//     notes: '',
//     ranking: '',
//     starred: false
//   }, trail);
// }

const NewTrailForm = ( {handleSubmit} ) => {
let title,
    description,
    distance,
    elevation,
    notes;
// make class with state

// const newTrail = () => ({
//   title: this.title.value,
//   description: '',
//   distance: null,
//   elevation: '',
//   notes: '',
// })
  // createTrail(e) {
  //   const { createTrailTemplate } = this.state;
  //   e.preventDefault();
  //   this.setState(createTrailTemplate());
  // }

    return(
      <section className="NewTrailForm">
        <form className="InputArea"
          onSubmit={(e) => {
            e.preventDefault()
            console.log('click save ', title, description, distance, elevation, notes);
            handleSubmit(payload)
        }}>
          <h1 className="NewTitle">Create a New Trail</h1>
          <label>
            Title
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              value={title}
              onChange={e => title = e.target.value}
            />
          </label>
          <label>
            Description
            <textarea
              type="text"
              name="description"
              placeholder="Enter trail description"
              value={description}
              onChange={e => description = e.target.value}
            />
          </label>
          <label>
            Distance
            <input
              type="number"
              name="distance"
              placeholder="Enter distance"
              value={distance}
              onChange={e => distance = e.target.value}
            />
          </label>
          <label>
            Elevation
            <input
              type="text"
              name="elevation"
              placeholder="Enter beginning/end elevation"
              value={elevation}
              onChange={e => elevation = e.target.value}
            />
          </label>
          <label>
            Notes
            <textarea
              type="text"
              name="notes"
              placeholder="Enter notes about trail"
              value={notes}
              onChange={e => notes = e.target.value}
            />
          </label>
          <input
            type="submit"
            className="SaveButton"
            value="Save"
          />
          {/* on clicking Save should "Link to" /TrailList page */}
        </form>
        
        <section className="MapRank">
          <p>Difficulty Ranking:</p>
          {/* star images */}
          <img src="" alt="map" className="TrailheadMap" />
        </section>
      </section>
    );

};

export default NewTrailForm;
