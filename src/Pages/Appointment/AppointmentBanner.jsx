/* eslint-disable react/prop-types */
import React from "react";
import chair from "../../assets/images/dentist-work.jpg";
import { DayPicker } from "react-day-picker";

import "react-day-picker/dist/style.css";

function AppointmentBanner({ selected, setSelected }) {
  const css = `
  .rdp-months{
    color:black;
  }
  .my-selected:not([disabled]) { 
    font-weight: bold; 
   background-color:#00bdd6;
   color:white;
  }
  .my-selected:hover:not([disabled]) { 
    
    color:#00bdd6;
  }
  .my-today { 
    font-weight: bold;
    font-size: 140%; 
    
  }

`;

  return (
    <div className="hero container my-28">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div>
          <img
            src={chair}
            className="lg:max-w-2xl rounded-md"
            alt="Dentist Chair"
          />
        </div>
        <div className=" p-4 rounded-lg shadow-2xl">
          <style>{css}</style>
          <DayPicker
            styles={{
              caption: { color: "#00bdd6" },
            }}
            mode="single"
            selected={selected}
            onSelect={setSelected}
            modifiersClassNames={{
              selected: "my-selected",
              total: "rdp-months",
              today: "my-today",
            }}
            modifiersStyles={{
              disabled: { fontSize: "75%" },
            }}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
}

export default AppointmentBanner;
