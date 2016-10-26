import React, { Component } from 'react';
// import firebase from '../firebase';

class NewTrailForm extends Component {

  sendPayload() {
    let payload = {
      title: this.storeTitle.value,
      description: this.storeDescription.value,
      distance: this.storeDistance.value,
      elevation: this.storeElevation.value,
      notes: this.storeNotes.value,
    }
    console.log('in component ' + payload);
    this.props.handleSubmit(payload);
  }

  render () {
    return(
      <div>
        <h1 className="NewTitle">
          Create a New Trail
        </h1>
        <section className="NewTrailForm">
          <form className="InputArea"
          onSubmit={(e) => {
            e.preventDefault()
            this.sendPayload()
          }}>
            <label>
              Title
              <input
                type="text"
                name="title"
                placeholder="Enter title"
                ref={(input) => this.storeTitle = input}
              />
            </label>
            <label>
              Description
              <textarea
                type="text"
                name="description"
                placeholder="Enter trail description"
                ref={(input) => this.storeDescription = input}
              />
            </label>
            <label>
              Distance
              <input
                type="number"
                name="distance"
                placeholder="Enter distance"
                ref={(input) => this.storeDistance = input}
              />
            </label>
            <label>
              Elevation
              <input
              type="text"
              name="elevation"
              placeholder="Enter beginning/end elevation"
              ref={(input) => this.storeElevation = input}
              />
            </label>
            <label>
              Notes
              <textarea
                type="text"
                name="notes"
                placeholder="Enter notes about trail"
                ref={(input) => this.storeNotes = input}
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
      </div>

    );
  }
}

export default NewTrailForm;
