import React, { Component } from 'react';
import { Link } from 'react-router';

const Favorites = (trail) => {
  return(
    <section className="Favorites">
      <Link to={`/Trail/${trail.title}`}>
        <p className="FavoriteTitle">{trail.title}</p>
      </Link>
    </section>
  );
};
export default Favorites;
