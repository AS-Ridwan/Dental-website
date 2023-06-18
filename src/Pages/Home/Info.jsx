import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

function Info() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-28">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-indigo-200"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Our Location"
        bgClass="bg-blue-200"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        bgClass="bg-teal-200"
        img={phone}
      ></InfoCard>
    </div>
  );
}

export default Info;
