import React from "react";
import Hero from "./Hero";
import Info from "./Info";
import Services from "./Services";
import MakeAppointment from "./MakeAppointment";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Contact></Contact>
    </div>
  );
}

export default Home;
