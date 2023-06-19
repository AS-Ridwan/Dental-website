import React from "react";
import "./Hero.css";

import { Button, Carousel, Typography } from "@material-tailwind/react";
import bgOne from "../../assets/images/hero-bg-1.jpg";
import bgTwo from "../../assets/images/hero-bg-2.jpg";
import bgThree from "../../assets/images/hero-bg-3.jpg";
import PrimaryButton from "./primaryButton";

function Hero() {
  return (
    <div>
      <Carousel
        className=""
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="hero-main sm:h-96 relative lg:h-full w-full  ">
          <img
            src={bgTwo}
            alt="image 1"
            className="hero-img  h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center ">
            <div className="w-4/4 text-left md:w-3/4 lg:w-3/4 px-5">
              <Typography
                variant="h1"
                color="white"
                className="w-fit text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-light bg-white/20"
              >
                Welcome to Dental Clinic
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="my-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-white"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-8 lg:mb-12 sm:w-3/4 md:w-3/4 lg:w-2/4 text-sm lg:text-base"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex justify-left gap-2">
                <PrimaryButton>Book Now</PrimaryButton>
                <Button
                  size="lg"
                  color="white"
                  variant="text"
                  className="text-xs lg:text-sm border-solid border-2 border-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-main sm:h-96 relative lg:h-full w-full  ">
          <img
            src={bgOne}
            alt="image 1"
            className="hero-img  h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center ">
            <div className="w-4/4 text-left md:w-3/4 lg:w-3/4 px-5">
              <Typography
                variant="h1"
                color="white"
                className="w-fit text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-light bg-white/20"
              >
                Welcome to Dental Clinic
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="my-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-white"
              >
                Creating Vibrant Smile
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-8 lg:mb-12 sm:w-3/4 md:w-3/4 lg:w-2/4 text-sm lg:text-base"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex justify-left gap-2">
                <Button
                  size="lg"
                  color="white"
                  className="text-xs lg:text-sm bg-white  text-primary"
                >
                  Book Now
                </Button>
                <Button
                  size="lg"
                  color="white"
                  variant="text"
                  className="text-xs lg:text-sm border-solid border-2 border-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-main sm:h-96 relative lg:h-full w-full  ">
          <img
            src={bgThree}
            alt="image 1"
            className="hero-img  h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center ">
            <div className="w-4/4 text-left md:w-3/4 lg:w-3/4 px-5">
              <Typography
                variant="h1"
                color="white"
                className="w-fit text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-light bg-white/20"
              >
                Welcome to Dental Clinic
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="my-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-white"
              >
                Brighten of Your Smile
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-8 lg:mb-12 sm:w-3/4 md:w-3/4 lg:w-2/4 text-sm lg:text-base"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </Typography>
              <div className="flex justify-left gap-2">
                <Button
                  size="lg"
                  color="white"
                  className="text-xs lg:text-sm bg-white  text-primary"
                >
                  Book Now
                </Button>
                <Button
                  size="lg"
                  color="white"
                  variant="text"
                  className="text-xs lg:text-sm border-solid border-2 border-white"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;
