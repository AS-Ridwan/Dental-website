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
        '"I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"',
    },
    {
      _id: 2,
      img: people2,
      name: "Daniel palmer",
      details: "chemist",
      description:
        '"I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"',
    },
    {
      _id: 3,
      img: people3,
      name: "Lily Milton",
      details: "Manager",
      description:
        '"I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!"',
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
