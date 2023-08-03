/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import React from "react";

function PrimaryButton({ children }) {
  return (
    <>
      <Button
        size="lg"
        color="white"
        className="text-xs lg:text-sm bg-cyan-600 hover:bg-cyan-400 text-white "
      >
        {children}
      </Button>
    </>
  );
}

export default PrimaryButton;
