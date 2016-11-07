import React, { Component } from 'react';
import { Link } from 'react-router';
import NewMap from './NewMap';

class NewTrailForm extends Component {
  constructor() {
    super();
      this.state = {
        position: {}
    };
  }

  setMarker(latLng) {
    console.log('setMarker', latLng.lat(), latLng.lng());
    this.setState({
      position: {
        lat: latLng.lat(),
        lng: latLng.lng()
      }
    });
    return new google.maps.Marker({
      animation: google.maps.Animation.DROP,
      position: latLng,
      map: this.map
    });
  }

  sendPayload() {
    let payload = {
      title: this.storeTitle.value,
      description: this.storeDescription.value,
      miles: this.storeMiles.value,
      elevation: this.storeElevation.value,
      notes: this.storeNotes.value,
      uid: Date.now(),
      position: this.state.position
    };
    this.props.handleSubmit(payload);
    this.context.router.transitionTo(`/TrailList`);
  }

  cancel() {
    this.context.router.transitionTo(`/`);
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
                name="miles"
                className="NewTrailField"
                placeholder="Enter miles"
                ref={(input) => this.storeMiles = input}
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
            <article className="Buttons">
              <input
                type="submit"
                className="SaveButton"
                value="Save"
              />
              <input
                value="Cancel"
                className="CancelButton"
                onClick={(e) => {
                  e.preventDefault()
                  this.cancel()
              }}/>
            </article>
          </section>

          <section className="RightSide">
            <p className="Ranking">Scroll to zoom | Click map to mark trail head location</p>
            {/* star images - array 0-4 */}
            <NewMap handleClick={(coords) => this.setMarker(coords)}/>
          </section>
        </form>

      </div>

    );
  }
}

NewTrailForm.contextTypes = {
  router: React.PropTypes.object
}

export default NewTrailForm;
