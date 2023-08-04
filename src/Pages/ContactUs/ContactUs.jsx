import React from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import MyMap from "./MyMap";
import Footer from "../Shared/Footer";
import Contact from "./Contact";

const ContactUs = () => {
  useDocumentTitle("Contact Us");

  return (
    <div>
      <MyMap></MyMap>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
