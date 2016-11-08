import React, { Component } from 'react';
import { Link } from 'react-router';

// convert to class like TrailCard
// reference grocery list redux repo for "starred grociers" array functionality

const Favorites = (trail) => {
  return(
    <section className="Favorites">
      <Link to="/Trail/:title">
        <p className="FavoriteTitle">{trail.title}</p>
      </Link>
    </section>
  );
};
export default Favorites;
