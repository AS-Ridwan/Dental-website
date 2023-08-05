import React from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import MyMap from "./MyMap";
import Footer from "../Shared/Footer";
import Contact from "./Contact";
import BreadCrum from "../Shared/BreadCrum/BreadCrum";

const ContactUs = () => {
  useDocumentTitle("Contact Us");

  return (
    <div>
      <BreadCrum>Contact Us</BreadCrum>
      <MyMap></MyMap>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
