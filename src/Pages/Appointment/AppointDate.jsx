/* eslint-disable react/prop-types */
import React from "react";

function AppointDate({ service, setTreatment }) {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body items-center text-black">
        <h2 className="card-title text-primary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-400">Not Available</span>
          )}
        </p>
        <p>
          {slots.length}
          {slots.length ? " spaces" : " space"} Available
        </p>
        <div className="card-actions justify-center">
          <label
            htmlFor="my_modal_3"
            disabled={slots.length == 0}
            className="btn btn-primary text-white"
            onClick={() => setTreatment(service)}
          >
            {" "}
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
}

export default AppointDate;
