import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

function Info() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-28">
      <div className="card lg:card-side shadow-xl bg-blue-400">
        <figure>
          <img src={clock} alt="clock" className="w-11 md:w-11 lg:w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">Opening Hours</h2>
          <p className="text-white text-left">
            It is not so much for its beauty that the forest makes a claim upon
          </p>
        </div>
      </div>

      <div className="card lg:card-side shadow-xl bg-purple-400">
        <figure>
          <img src={marker} alt="clock" className="w-11 md:w-11 lg:w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">Our Location</h2>
          <p className="text-white text-left">
            It is not so much for its beauty that the forest makes a claim upon
          </p>
        </div>
      </div>

      <div className="card lg:card-side shadow-xl bg-cyan-400">
        <figure>
          <img src={phone} alt="clock" className="w-11 md:w-11 lg:w-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">Contact Us</h2>
          <p className="text-white text-left">
            Love is not so much for its beauty that the forest makes a claim
            upon
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
