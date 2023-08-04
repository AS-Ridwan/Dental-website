import React from "react";
import Hero from "./Hero";
import Info from "./Info";
import Services from "./Services";
import MakeAppointment from "./MakeAppointment";
import Contact from "../ContactUs/Contact";
import Footer from "../Shared/Footer";
import Testimonial from "./Testimonial";
import useDocumentTitle from "../../hooks/useDocumentTitle";

function Home() {
  useDocumentTitle("Home");
  return (
    <div>
      <Hero></Hero>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
}

export default Home;
