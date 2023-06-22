/* eslint-disable react/prop-types */
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointDate from "./AppointDate";
import BookingModel from "./BookingModel";

function AvailableAppointment({ selected }) {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    const url = "./services.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-28 container">
      <h3 className="text-2xl text-primary text-center">
        Available Appointment date on {format(selected, "PP")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => (
          <AppointDate
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointDate>
        ))}
      </div>
      {treatment && <BookingModel treatment={treatment}></BookingModel>}
    </div>
  );
}

export default AvailableAppointment;
