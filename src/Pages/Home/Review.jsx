/* eslint-disable react/prop-types */
import {
  Avatar,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

function Review({ review }) {
  return (
    <div>
      <div className="card w-max-lg lg:w-96 bg-base-100 shadow-xl ">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-start gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src={review.img}
            alt="candice wu"
          />
          <div className="flex w-full flex-col gap-0.5 items-start">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                {review.name}
              </Typography>
            </div>
            <Typography color="blue-gray">{review.details}</Typography>
            <div className="5 flex items-center gap-0">
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
              <StarIcon className="h-5 w-5 text-yellow-700" />
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography className="text-black">{review.description}</Typography>
        </CardBody>
      </div>
    </div>
  );
}

export default Review;
