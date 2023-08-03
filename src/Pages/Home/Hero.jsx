import React from "react";
import "./Hero.css";

// import { Button, div } from "@material-tailwind/react";
import { Button, Carousel } from "flowbite-react";

import bgOne from "../../assets/images/hero-bg-1.jpg";
import bgTwo from "../../assets/images/hero-bg-2.jpg";
import bgThree from "../../assets/images/hero-bg-3.jpg";
import PrimaryButton from "./primaryButton";
import { Link } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import "react-animated-slider/build/horizontal.css";

function Hero() {
  const springs = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1500,
    config: { duration: 700 },
  });
  const springs2 = useSpring({
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
    delay: 1900,
    config: { duration: 800 },
  });
  return (
    <div>
      <Carousel slideInterval={5000}>
        <div className="hero-main sm:h-96 relative lg:h-full w-full  ">
          <img
            src={bgTwo}
            alt="image 1"
            className="hero-img  h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 grid h-full w-full place-items-center "
            data-aos="fade-down"
          >
            <div className="w-4/4 text-left md:w-3/4 lg:w-3/4 px-5">
              <h3
                color="white"
                className="w-fit text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-light bg-gray-600/50  animate__animated animate__bounce"
              >
                Welcome to Dental Clinic
              </h3>
              <h1
                color="white"
                className="my-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-[#202c45] uppercase font-medium"
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-duration="800"
                data-aos-easing="ease-in"
              >
                Best Choice For<br></br>{" "}
                <span className="text-primary	">Dental</span> Clinic
              </h1>
              <p
                color="white"
                className="mb-8 lg:mb-12 sm:w-3/4 md:w-3/4 lg:w-2/4 text-sm lg:text-base lg:text-gray-500 text-black"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </p>
              <div className="flex justify-left gap-5">
                <animated.div style={springs}>
                  <Link to="/appointment">
                    <PrimaryButton>Book Now</PrimaryButton>
                  </Link>
                </animated.div>

                <animated.div style={springs2}>
                  <Link to="/about">
                    <Button
                      size="lg"
                      color="white"
                      variant="text"
                      className="text-xs lg:text-sm bg-[#202c45] hover:bg-blue-gray-700 text-white"
                    >
                      Learn More
                    </Button>
                  </Link>
                </animated.div>
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
              <div
                color="white"
                className="w-fit text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-light bg-gray-600/50 animate__animated animate__bounce"
              >
                Welcome to Dental Clinic
              </div>
              <div
                color="white"
                className="my-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-[#202c45] uppercase font-medium	"
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
              >
                We have qualified <br></br>{" "}
                <span className="text-primary	">Dental</span> exparts
              </div>
              <div
                color="white"
                className="mb-8 lg:mb-12 sm:w-3/4 md:w-3/4 lg:w-2/4 text-sm lg:text-base lg:text-gray-500 text-black"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </div>
              <div className="flex justify-left gap-5">
                <Link to="/appointment">
                  <PrimaryButton>Book Now</PrimaryButton>
                </Link>

                <Link to="/about">
                  <Button
                    size="lg"
                    color="white"
                    variant="text"
                    className="text-xs lg:text-sm bg-[#202c45] hover:bg-blue-gray-700 text-white"
                  >
                    Learn More
                  </Button>
                </Link>
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
              <div
                color="white"
                className="w-fit text-2xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-light bg-gray-600/50"
                data-aos="fade-down"
                data-aos-delay="500"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                Welcome to Dental Clinic
              </div>
              <div
                color="white"
                className="my-5 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-[#202c45] uppercase font-medium	"
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
              >
                Providing best<br></br>{" "}
                <span className="text-primary	">Dental</span> Care
              </div>
              <div
                color="white"
                className="mb-8 lg:mb-12 sm:w-3/4 md:w-3/4 lg:w-2/4 text-sm lg:text-base lg:text-gray-500 text-black"
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
              </div>
              <div className="flex justify-left gap-5">
                <Link to="/appointment">
                  <PrimaryButton>Book Now</PrimaryButton>
                </Link>

                <Link to="/about">
                  <Button
                    size="lg"
                    color="white"
                    variant="text"
                    className="text-xs lg:text-sm bg-[#202c45] hover:bg-blue-gray-700 text-white"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Hero;
