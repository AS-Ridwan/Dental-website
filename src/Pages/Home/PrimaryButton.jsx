/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import React from "react";

function PrimaryButton({ children }) {
  return (
    <>
      <Button
        size="lg"
        color="white"
        className="text-xs lg:text-sm bg-white  text-primary"
      >
        {children}
      </Button>
    </>
  );
}

export default PrimaryButton;
