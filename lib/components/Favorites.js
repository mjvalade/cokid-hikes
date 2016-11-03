import React, { Component } from 'react';

// convert to class like TrailCard
// reference grocery list redux repo for "starred grociers" array functionality

const Favorites = (trail) => {
  return(
    <section className="Favorites">
      <p className="FavoriteTitle">{trail.title}</p>
    </section>
  );
};
export default Favorites;
