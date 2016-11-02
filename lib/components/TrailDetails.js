import React, { Component } from 'react';
import { map, extend } from 'lodash';


const TrailDetails = ({uid}) => {


  return(
    <div className="TrailDetail">
      <h1 className="DetailTitle">{trail.title}</h1>
      <section>
        <img src="../public/assets/mountains-card.png" alt="landscape" className="DetailImg" />
        <p className="DetailDesc">{trail.description}</p>
        <span></span>
        <p className="DetailNotes">{trail.notes}</p>
      </section>
      <section>
        <h1>Trail Information</h1>
        <p className="DetailMiles">Distance: {trail.miles}</p>
        <p className="DetailElev">Elevation: {trail.elevation}</p>
      </section>
    </div>
  );
}

export default TrailDetails;
