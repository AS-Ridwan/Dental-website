/* eslint-disable react/prop-types */
import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

function BookingModel({ treatment, setTreatment, selected, refetch }) {
  const { _id, name, slots } = treatment;
  const [user] = useAuthState(auth);

  const formateDate = format(selected, "PP");

  const bookingSubmit = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      slot,
      selected: formateDate,
      patientName: user.displayName,
      patientMail: user.email,
      phoneNumber: e.target.phone.value,
    };

    fetch("https://dental-servers-20q8.onrender.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Appointment is set, ${formateDate} at ${slot} `);
        } else {
          toast.error(
            `Already have an Appointment on ${data.booking?.selected} at ${slot}`
          );
        }
        refetch();
        setTreatment(null);
      });
  };

  return (
    <div>
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
              disabled
              value={user ? user.displayName : ""}
              className="input input-bordered focus:outline-none input-accent w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user ? user.email : ""}
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
