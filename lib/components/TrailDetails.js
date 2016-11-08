import React, { Component } from 'react';
import { map, extend, find } from 'lodash';
import DisplayMap from './DisplayMap';
import starTrail from '../actions/auth';

// mapDispatchToProps for starTrail action

class TrailDetails extends Component {

  render() {

    const { starTrail } = this.props;
    const currentTrailData = find(this.props.trailList, (trail) => {
      return trail.uid === this.props.selectedTrail;
    });

    return(
      <div className="TrailDetail">
        <section className="TitleContainer">
          <img src="../../public/assets/mountains-icon.png" alt="landscape" className="MtnIconDetail" />
          <h1 className="DetailTitle">
            {currentTrailData.title}
          </h1>
          <button
            onClick={e => starTrail(currentTrailData)}
            className="FavoriteButton"
          >
            Make Favorite
          </button>
        </section>
        <div className="FullContainer">
          <section className="LeftContainer">
            <img src="../../public/assets/mountains-card.png" alt="landscape" className="DetailImg" />
            <p className="DetailDesc">{currentTrailData.description}</p>
            <span className="divider"></span>
            <p className="DetailNotes"><span className="bold">Notes:</span> {currentTrailData.notes}</p>
          </section>
          <section className="RightContainer">
            <h1 className="InfoTitle">Trail Information</h1>
            <p className="DetailMiles">Distance: {currentTrailData.miles} miles</p>
            <p className="DetailElev">Elevation: {currentTrailData.elevation}</p>
            {currentTrailData.position ?
              <DisplayMap coords={currentTrailData.position}/>
              : null
            }
          </section>
        </div>
      </div>
    );
  }
}

export default TrailDetails;
