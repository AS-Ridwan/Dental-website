/* eslint-disable react/prop-types */
import { format } from "date-fns";
import React, { useState } from "react";
import AppointDate from "./AppointDate";
import BookingModel from "./BookingModel";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

function AvailableAppointment({ selected }) {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const formattedDate = format(selected, "PP");

  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formattedDate], () =>
    fetch(`http://localhost:5000/available?selected=${formattedDate}`).then(
      (res) => res.json()
    )
  );

  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?selected=${formattedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formattedDate]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-28 container">
      <h3 className="text-2xl text-primary text-center">
        Available Appointment date on {format(selected, "PP")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services?.map((service) => (
          <AppointDate
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AppointDate>
        ))}
      </div>
      {treatment && (
        <BookingModel
          treatment={treatment}
          setTreatment={setTreatment}
          selected={selected}
          refetch={refetch}
        ></BookingModel>
      )}
    </div>
  );
}

export default AvailableAppointment;
