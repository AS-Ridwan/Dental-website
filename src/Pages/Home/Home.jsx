import React from "react";
import Hero from "./Hero";
import Info from "./Info";
import Services from "./Services";
import MakeAppointment from "./MakeAppointment";
import Contact from "./Contact";
import Footer from "../Shared/Footer";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default Home;
