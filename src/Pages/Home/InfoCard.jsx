import React from "react";

// eslint-disable-next-line react/prop-types
function InfoCard({ img, cardTitle, bgClass }) {
  return (
    <div>
      <div className={`card lg:card-side bg-base-100 shadow-xl ${bgClass}`}>
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{cardTitle}</h2>
          <p className="text-white text-left">
            It is not so much for its beauty that the forest makes a claim upon
            men's hearts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
