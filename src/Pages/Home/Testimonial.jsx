import React from "react";
import people1 from "../../assets/images/1.png";
import people2 from "../../assets/images/2.png";
import people3 from "../../assets/images/3.png";
import Review from "./Review";
import quote from "../../assets/icons/quote.svg";

function Testimonial() {
  const Reviews = [
    {
      _id: 1,
      img: people1,
      name: "Candice Wu",
      details: "Businessman",
      description:
        "“I'd been avoiding the dentist for years due to bad experiences.But I have been a patient here after my first appointment. My dentist is very reassuring and very helpful. Excellent treatment and advice.” ",
    },
    {
      _id: 2,
      img: people2,
      name: "Daniel palmer",
      details: "chemist",
      description:
        "“I'd been avoiding the dentist for years due to bad experiences.But I have been a patient here after my first appointment. My dentist is very reassuring and very helpful. Excellent treatment and advice.”",
    },
    {
      _id: 3,
      img: people3,
      name: "Lily Milton",
      details: "Manager",
      description:
        "“I'd been avoiding the dentist for years due to bad experiences.But I have been a patient here after my first appointment. My dentist is very reassuring and very helpful. Excellent treatment and advice.”",
    },
  ];
  return (
    <section className="container mb-28 ">
      <div>
        <div className="flex justify-between mb-20">
          <div className="text-start ">
            <h2 className="text-2xl font-bold text-primary mb-2">
              Testimonials
            </h2>
            <h3 className="text-black text-2xl">
              What Our Patients Say About Us
            </h3>
          </div>
          <div>
            <img src={quote} alt="quote" className="w-24 lg:w-48" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
