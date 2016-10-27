import React from 'react';

const TrailCard = () => {
  return(
    <section className="TrailCard">
      {/* <Link
        to=""
        className="CardLink"> */}
          <img src="../public/assets/mountains-card.png" alt="landscape" className="TrailImg" />
          <h1 className="CardTitle">Title</h1>
          <p className="CardMiles"># miles</p>
          <p className="CardDesc">Description</p>
        {/* </Link> */}
    </section>
  );
};
export default TrailCard;
