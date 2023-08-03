import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

function Info() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-28">
      <div className="card lg:card-side shadow-xl bg-blue-400">
        <figure>
          <img src={clock} alt="clock" className="w-11 md:w-11 lg:w-12" />
        </figure>
        <div className="card-body pe-0">
          <h2 className="card-title text-white">Working Time</h2>
          <p className="text-white text-left flex items-center">
            Monday-Friday : 09:00AM - 08:00PM
          </p>
          <p className="text-white text-left flex items-center">
            Saturday : 12:00AM - 05:00PM
          </p>
          <p className="text-white text-left ">Sunday Closed</p>
        </div>
      </div>

      <div className="card lg:card-side shadow-xl bg-purple-400">
        <figure>
          <img src={marker} alt="clock" className="w-11 md:w-11 lg:w-8" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">Our Location</h2>
          <p className="text-white text-left">
            Address: 198 West 21th Street, Suite<br></br>721 NewYork NY10016
          </p>
        </div>
      </div>

      <div className="card lg:card-side shadow-xl bg-cyan-400">
        <figure>
          <img src={phone} alt="clock" className="w-11 md:w-11 lg:w-11" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">Contact Us</h2>
          <p className="text-white text-left">
            Phone: +1235 2355 97 <br></br>Email: DentalCare@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
