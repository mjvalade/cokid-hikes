import React, { Component } from 'react';
import firebase from '../firebase';

const NewTrailForm = ({ handleSubmit }) => {
let title,
    description,
    distance,
    elevation,
    notes;

    return(
      <section className="NewTrailForm">
        <form className="InputArea"
          onSubmit={(e) => {
            e.preventDefault()
            handleSubmit({title, description, distance, elevation, notes})
            // console.log('click save ', payload);
        }}>
          <h1 className="NewTitle">
            Create a New Trail
          </h1>
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
