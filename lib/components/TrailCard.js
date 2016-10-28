import React, { Component } from 'react';

const TrailCard = () => {
  return(
    <section className="TrailCard">
    {/* import trail data to fill in */}
      <img src="../public/assets/mountains-card.png" alt="landscape" className="TrailImg" />
      <h1 className="CardTitle">Title</h1>
      <p className="CardMiles"># miles</p>
      <p className="CardDesc">Description</p>
    </section>
  );
};
export default TrailCard;
