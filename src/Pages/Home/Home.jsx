import React from "react";
import Hero from "./Hero";
import Info from "./Info";
import Services from "./Services";
import MakeAppointment from "./MakeAppointment";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
    </div>
  );
}

export default Home;
