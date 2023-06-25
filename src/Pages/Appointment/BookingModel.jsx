/* eslint-disable react/prop-types */
import { format } from "date-fns";
import React from "react";

function BookingModel({ treatment, setTreatment, selected }) {
  const { name, slots } = treatment;

  const bookingSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    console.log(name, slot);
    setTreatment(null);
  };

  return (
    <div>
      {/* You can open the modal using ID.showModal() method */}

      <input type="checkbox" id="my_modal_3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my_modal_3"
            className="btn  btn-md btn-circle btn-ghost absolute right-2 top-2 text-black"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-primary mb-3 ">
            Booking for : {name}
          </h3>
          <form
            onSubmit={bookingSubmit}
            className="grid grid-cols-1 gap-4 justify-items-center text-black"
          >
            <input
              disabled
              type="text"
              value={format(selected, "PP")}
              className="input input-bordered focus:outline-none input-accent w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered focus:outline-none input-accent w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered focus:outline-none input-accent w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Your Number"
              className="input input-bordered focus:outline-none input-accent w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary text-white w-full max-w-xs"
            />
          </form>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
}

export default BookingModel;
