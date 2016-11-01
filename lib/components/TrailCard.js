import React, { Component } from 'react';

const TrailCard = (trail) => {
  return(
    <section className="TrailCard">
      <img src="../public/assets/mountains-card.png" alt="landscape" className="TrailImg" />
      <h1 className="CardTitle">{trail.title}</h1>
      <p className="CardMiles">{trail.miles}</p>
      <p className="CardDesc">{trail.description}</p>
    </section>
  );
};
export default TrailCard;
