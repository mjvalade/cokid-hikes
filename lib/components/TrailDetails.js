import React, { Component } from 'react';
import { map, extend, find } from 'lodash';


class TrailDetails extends Component {

  render() {
    const currentTrailData = find(this.props.trailList, (trail) => {
      return trail.uid === this.props.selectedTrail;
    });

    return(
      <div className="TrailDetail">
      <h1 className="DetailTitle">{currentTrailData.title}</h1>
      <section>
      <img src="../../public/assets/mountains-card.png" alt="landscape" className="DetailImg" />
      <p className="DetailDesc">{currentTrailData.description}</p>
      <span></span>
      <p className="DetailNotes">{currentTrailData.notes}</p>
      </section>
      <section>
      <h1>Trail Information</h1>
      <p className="DetailMiles">Distance: {currentTrailData.miles}</p>
      <p className="DetailElev">Elevation: {currentTrailData.elevation}</p>
      </section>
      </div>
    );
  }
}

export default TrailDetails;
