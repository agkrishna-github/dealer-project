import React, { useState } from "react";
import ciazImg from "../images/ciaz.webp";

/* import img1 from "../images/img1.webp";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.webp";
import img4 from "../images/img4.jpg"; */

const Arrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    ></div>
  );
};

const Hero = () => {
  return (
    <section className="">
      {/* <div className="p-1 flex flex-col-reverse justify-center items-center mb-3 gap-3 min-h-32 main"> */}

      <div className="newBgDiv relative hero" id="home">
        <div className="flex flex-col justify-center gap-y-4 md:gap-y-0 h-[400px] p-3 text-white absolute top-20 right-20 addImg">
          <h2 className="md:text-xl">India's Safest Car is Mahindra</h2>
          <div className="font-semibold">
            Mahindra is the best car service provider
          </div>
          <button className="inline-block w-fit bg-transparent text-white border-solid border-white px-3 py-2  rounded-md cursor-pointer my-3 expBtn ">
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
