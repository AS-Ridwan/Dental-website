import React from "react";
import doctor from "../../assets/images/doctor-2.png";
import appointment from "../../assets/images/appointment-1.jpg";
import PrimaryButton from "./primaryButton";
import { Link } from "react-router-dom";

function MakeAppointment() {
  return (
    <section
      className="flex justify-center items-center bg-no-repeat my-44 px-4 py-8 lg:py-0"
      style={{ background: `url(${appointment})` }}
    >
      <div className="flex-1 hidden lg:flex justify-center items-center">
        <img src={doctor} alt="doctor" className="mt-[-100px] " />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-2xl text-white py-2">Make an Appointment Today</h2>
        <p className="text-white w-4/4 md:w-3/4 lg:w-3/4 mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          explicabo animi? Sunt maxime, possimus quas id at quo, reiciendis
          tempora expedita voluptatem eius minus, vel laborum inventore
          repudiandae distinctio. Facilis?
        </p>
        <Link to="/appointment">
          <PrimaryButton>Book Appointment</PrimaryButton>
        </Link>
      </div>
    </section>
  );
}

export default MakeAppointment;
