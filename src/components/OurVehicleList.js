import React, { useState } from "react";
import SliderPage from "./SliderPage";

const OurVehicleList = () => {
  const [vehNav, setVehNav] = useState("#");
  return (
    <>
      <div className="p-3 mt-10 " id="vehicles">
        <h2 className="text-center p-2 mb-4">Our Vehicles</h2>
        <div className="flex justify-center items-center gap-1 mb-3 md:text-sm md:font-bold">
          <div
            className={
              vehNav === "#"
                ? "text-red-500  border-solid border-1 border-red-500 cursor-pointer px-2 py-1"
                : "  cursor-pointer px-2 py-1"
            }
            onClick={() => setVehNav("#")}
          >
            All
          </div>
          <div
            className={
              vehNav === "arena"
                ? "text-red-500  border-solid border-1 border-red-500 p-3 cursor-pointer px-2 py-1"
                : " p-3 cursor-pointer px-2 py-1"
            }
            onClick={() => setVehNav("arena")}
          >
            Arena
          </div>
          <div
            className={
              vehNav === "commercial"
                ? "text-red-500  border-solid border-1 border-red-500 p-3 cursor-pointer px-2 py-1"
                : " p-3 cursor-pointer px-2 py-1"
            }
            onClick={() => setVehNav("commercial")}
          >
            Commercial
          </div>
          <div
            className={
              vehNav === "nexa"
                ? "text-red-500  border-solid border-1 border-red-500 p-3 cursor-pointer px-2 py-1"
                : " p-3 cursor-pointer px-2 py-1"
            }
            onClick={() => setVehNav("nexa")}
          >
            Nexa
          </div>
          <div
            className={
              vehNav === "trueValue"
                ? "text-red-500  border-solid border-1 border-red-500 p-3 cursor-pointer px-2 py-1"
                : "p-3 cursor-pointer px-2 py-1"
            }
            onClick={() => setVehNav("trueValue")}
          >
            True Value
          </div>
        </div>
      </div>
      <SliderPage />
    </>
  );
};

export default OurVehicleList;
