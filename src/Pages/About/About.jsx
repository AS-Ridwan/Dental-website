import React from "react";
import Footer from "../Shared/Footer";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import BreadCrum from "../Shared/BreadCrum/BreadCrum";
import dentistWork from "../../assets/images/treatment.png";
import tooth from "../../assets/icons/tooth-about.svg";
import team from "../../assets/icons/team-about.svg";
import kit from "../../assets/icons/first-aid-about.svg";

function About() {
  useDocumentTitle("About");
  return (
    <div>
      <BreadCrum>About</BreadCrum>
      <div className="container my-32 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <img
            className="w-[600px] h-[550px] object-cover"
            src={dentistWork}
            alt="Dentist Work"
          />
        </div>
        <div>
          <h2 className="text-3xl text-black text-start mb-8">
            We Care About Your teeth
          </h2>
          <div className="flex">
            <div>
              <img className="w-[150px]" src={tooth} alt="Tooth" />
            </div>
            <div className="text-start ms-5 ">
              <h4 className="text-primary font-semibold text-lg">
                Affordable Care
              </h4>
              <p className="text-black leading-7 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                semper venenatis turpis eget suscipit. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec eu nulla sollicitudin, vestibulum.
              </p>
            </div>
          </div>
          {/* === */}
          <div className="flex my-5">
            <div>
              <img className="w-[150px]" src={team} alt="Team Work" />
            </div>
            <div className="text-start ms-5 ">
              <h4 className="text-primary font-semibold text-lg">
                Affordable Care
              </h4>
              <p className="text-black  leading-7 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                semper venenatis turpis eget suscipit. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec eu nulla sollicitudin, vestibulum.
              </p>
            </div>
          </div>
          {/* === */}
          <div className="flex">
            <div>
              <img className="w-[150px]" src={kit} alt="Aid Kit" />
            </div>
            <div className="text-start ms-5 ">
              <h4 className="text-primary font-semibold text-lg">
                Affordable Care
              </h4>
              <p className="text-black  leading-7 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                semper venenatis turpis eget suscipit. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec eu nulla sollicitudin, vestibulum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default About;
