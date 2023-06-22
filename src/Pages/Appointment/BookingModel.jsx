/* eslint-disable react/prop-types */
import React from "react";

function BookingModel({ treatment }) {
  const { name, slots } = treatment;
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
          <h3 className="font-bold text-lg text-primary">{name}</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>
          <div className="modal-action"></div>
        </div>
      </div>
    </div>
  );
}

export default BookingModel;
