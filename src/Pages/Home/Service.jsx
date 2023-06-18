/* eslint-disable react/prop-types */
import React from "react";

// eslint-disable-next-line react/prop-types
function Service({ service }) {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={service.img} alt="Shoes" className="rounded-xl w-12" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-accent">{service.name}</h2>
        <p className="text-accent">{service.description}</p>
        <div className="card-actions"></div>
      </div>
    </div>
  );
}

export default Service;
