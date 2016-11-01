import React, { Component } from 'react';
import { Link } from 'react-router';

class NewTrailForm extends Component {

  sendPayload() {
    let payload = {
      title: this.storeTitle.value,
      description: this.storeDescription.value,
      distance: this.storeDistance.value,
      elevation: this.storeElevation.value,
      notes: this.storeNotes.value,
      uid: Date.now()
    };
    this.props.handleSubmit(payload);
  }

  render () {
    return(
      <div>
        <h1 className="NewTitle">
          Create a New Trail
        </h1>
        <form className="InputArea"
          onSubmit={(e) => {
            e.preventDefault()
            this.sendPayload()
          }}>
          <section className="NewTrailForm">
            <label className="NewTrailLabel">
              Title
              <input
                type="text"
                name="title"
                className="NewTrailField"
                placeholder="Enter title"
                ref={(input) => this.storeTitle = input}
              />
            </label>
            <label className="NewTrailLabel">
              Description
              <textarea
                type="text"
                name="description"
                className="NewTrailField"
                placeholder="Enter trail description"
                ref={(input) => this.storeDescription = input}
              />
            </label>
            <label className="NewTrailLabel">
              Distance
              <input
                type="number"
                name="distance"
                className="NewTrailField"
                placeholder="Enter distance"
                ref={(input) => this.storeDistance = input}
              />
            </label>
            <label className="NewTrailLabel">
              Elevation
              <input
              type="text"
              name="elevation"
              className="NewTrailField"
              placeholder="Enter beginning/end"
              ref={(input) => this.storeElevation = input}
              />
            </label>
            <label className="NewTrailLabel">
              Notes
              <textarea
                type="text"
                name="notes"
                className="NewTrailField"
                placeholder="Enter notes about trail"
                ref={(input) => this.storeNotes = input}
              />
            </label>
            {/* <Link
              to="/TrailList"
              className="SaveLink"
              activeClassName="active"
            > */}
              <input
                type="submit"
                className="SaveButton"
                value="Save"
              />
            {/* </Link> */}
          </section>

          <section className="MapRank">
            <p>Difficulty Ranking:</p>
            {/* star images - array 0-4 */}
            <img src="" alt="map" className="TrailheadMap" />
          </section>
        </form>

      </div>

    );
  }
}

export default NewTrailForm;
