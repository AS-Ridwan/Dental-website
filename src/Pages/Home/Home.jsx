import React from "react";
import "./Home.css";
import Hero from "./Hero";
import Info from "./Info";
import Services from "./Services";
import MakeAppointment from "./MakeAppointment";

import Footer from "../Shared/Footer";
import Testimonial from "./Testimonial";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ScrollToTop from "react-scroll-to-top";

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

      <div>
        <ScrollToTop className="scrollBtn" smooth></ScrollToTop>
      </div>
    </div>
  );
}

export default Home;
