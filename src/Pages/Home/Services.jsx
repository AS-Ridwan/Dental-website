import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

function Services() {
  const services = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      img: fluoride,
    },

    {
      _id: 2,
      name: "Root Canals",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      img: cavity,
    },

    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      img: whitening,
    },
  ];
  return (
    <div className="container my-28">
      <div className="text-center mb-20">
        <h3 className="text-2xl font-bold uppercase  text-primary mb-3">
          What We Do
        </h3>
        <h2 className="text-2xl md:text-4xl lg:text-4xl text-accent uppercase">
          Services We Provide
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
}

export default Services;
