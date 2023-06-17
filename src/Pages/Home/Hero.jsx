import React from "react";

import { Button, Carousel, Typography } from "@material-tailwind/react";
import bgOne from "../../assets/images/hero-bg-1.jpg";
import bgTwo from "../../assets/images/hero-bg-2.jpg";
import bgThree from "../../assets/images/hero-bg-3.jpg";

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
        <div className="relative lg:h-full w-full h-96 ">
          <img
            src={bgTwo}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
            <div className="w-3/4 text-left md:w-3/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-8xl text-primary"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-8 lg:mb-12 opacity-80 sm:w-4/4 md:w-3/4 lg:w-2/4 text-sm lg:text-base"
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
                  className="text-xs lg:text-sm bg-primary text-white"
                >
                  Explore
                </Button>
                <Button
                  size="lg"
                  color="white"
                  variant="text"
                  className="text-xs lg:text-sm bg-white/20"
                >
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={bgOne}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
            <div className="w-3/4 text-left md:w-3/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-8xl text-primary"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-8 lg:mb-12 opacity-80 sm:w-4/4 md:w-3/4 lg:w-2/4 text-sm lg:text-base"
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
                  className="text-xs lg:text-sm bg-primary text-white"
                >
                  Explore
                </Button>
                <Button
                  size="lg"
                  color="white"
                  variant="text"
                  className="text-xs lg:text-sm bg-white/20"
                >
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img src={bgThree} className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/20">
            <div className="w-3/4 text-left md:w-3/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 lg:text-5xlmb-4 text-3xl md:text-4xl lg:text-5xl xl:text-8xl text-primary"
              >
                The Beauty of Nature
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-8 lg:mb-12 opacity-80 sm:w-4/4 md:w-3/4 lg:w-2/4 text-sm lg:text-base"
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
                  className="text-xs lg:text-sm bg-primary text-white"
                >
                  Explore
                </Button>
                <Button
                  size="lg"
                  color="white"
                  variant="text"
                  className="text-xs lg:text-sm bg-white/20"
                >
                  Gallery
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
