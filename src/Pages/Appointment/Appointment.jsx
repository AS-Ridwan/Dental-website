import React from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointment from "./AvailableAppointment";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Appointment() {
  useDocumentTitle("Appointment");
  const [selected, setSelected] = React.useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppointmentBanner>
      <AvailableAppointment selected={selected}></AvailableAppointment>
      <Footer></Footer>
    </div>
  );
}

export default Appointment;
