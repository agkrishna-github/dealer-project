import React, { useState } from "react";
import ciazImg from "../images/ciaz.webp";
import img1 from "../images/img1.webp";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.webp";
import img4 from "../images/img4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuestion } from "react-icons/fa";
import { HiWrenchScrewdriver } from "react-icons/hi2";

import { TbSteeringWheel } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";

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
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [vehNav, setVehNav] = useState("#");
  return (
    <section className="">
      <div className="p-1 flex flex-col-reverse justify-center items-center mb-3 gap-3 min-h-32 main">
        <div className="flex  justify-center items-center">
          <img
            src={ciazImg}
            alt="Hero Image"
            width={664}
            height={374}
            className="h-full w-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-4 md:gap-y-0 h-full p-3">
          <h2>India's Safest Car is Maruti</h2>
          <div className="font-semibold">
            Maruti is the best car service provider
          </div>
          <button className="inline-block px-3 py-2 bg-black text-white rounded-md cursor-pointer my-3 expBtn">
            Explore
          </button>
        </div>
      </div>
      <div className="p-2 min-h-[120px] bg-black text-white flex flex-col justify-center items-center gap-y-6 pb-4">
        <h5 className="p-3 md:text-sm">
          I am Looking for a light commercial vehicle for the Perpose of milage
        </h5>
        <button
          className="inline-block px-3 py-2 bg-black text-white cursor-pointer rounded-lg findBtn"
          style={{ border: "2px solid white" }}
        >
          Find
        </button>
      </div>

      <div className="p-3 mt-10 ">
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

      <div className="mb-2">
        <Slider
          {...settings}
          className="flex justify-center items-center gap-x-2 w-11/12 mx-auto"
        >
          <div className="h-[350px] w-[400px] md:h-[250px] md:w-[300px] px-1 py-2">
            <div className="w-full h-[250px] md:h-[100px] md:w-[160px] ">
              <img
                className="w-full h-full object-cover md:object-cover"
                src={img1}
                alt=""
              />
            </div>
            <div className="">
              <h5 className="">Swift</h5>
              <p className="">New Swift</p>
            </div>
          </div>
          <div className="h-[350px] w-[400px] md:h-[250px] md:w-[300px] px-1 py-2">
            <div className="w-full h-[250px] md:h-[100px] md:w-[160px] ">
              <img
                className="w-full h-full object-cover md:object-cover"
                src={img2}
                alt=""
              />
            </div>
            <div className="">
              <h5 className="">Spresso</h5>
              <p className="">New Spresso</p>
            </div>
          </div>
          <div className="h-[350px] w-[400px] md:h-[250px] md:w-[300px] px-1 py-2">
            <div className="w-full h-[250px] md:h-[100px] md:w-[160px] ">
              <img
                className="w-full h-full object-cover md:object-cover"
                src={img3}
                alt=""
              />
            </div>
            <div className="">
              <h5 className="">XL 6</h5>
              <p className="">New XL6</p>
            </div>
          </div>
          <div className="h-[350px] w-[400px] md:h-[250px] md:w-[300px] px-1 py-2">
            <div className="w-full h-[250px] md:h-[100px] md:w-[160px] ">
              <img
                className="w-full h-full object-cover md:object-cover"
                src={img4}
                alt=""
              />
            </div>
            <div className="">
              <h5 className="">Wagon R</h5>
              <p className="">New Wagon R</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className="mt-16 w-11/12 mx-auto lg:mt-16 qactions">
        <h2 className="p-2 text-center mb-3 mt-5">Quick Actions</h2>
        <div className="p-3 flex flex-wrap gap-x-6 gap-6 md:flex-nowrap">
          <div className="shadow-lg shadow-black w-[300px] hover:bg-[#EA3A51]  flex gap-6 p-3 dAction">
            <div
              className="p-3 h-[50px] min-w-[50px] flex justify-center items-center text-red-500 mb-3 icons"
              style={{ border: "2px solid red", borderRadius: "100%" }}
            >
              <div>
                <FaQuestion />
              </div>
            </div>
            <div>
              <p className="p-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                mollitia?
              </p>
              <button className="inline-block cursor-pointer p-2 rounded-lg expnBtn">
                Explore
              </button>
            </div>
          </div>
          <div className="shadow-lg shadow-black w-[300px] hover:bg-[#EA3A51] flex gap-6 p-3 dAction">
            <div
              className="p-3 h-[50px] min-w-[50px] flex justify-center items-center text-red-500 mb-3 icons"
              style={{ border: "2px solid red", borderRadius: "100%" }}
            >
              <HiWrenchScrewdriver />
            </div>
            <div>
              <p className="p-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                mollitia?
              </p>
              <button className="inline-block cursor-pointer p-2 rounded-lg expnBtn">
                Explore
              </button>
            </div>
          </div>
          <div className="shadow-lg shadow-black w-[300px] hover:bg-[#EA3A51] flex gap-6 p-3 dAction">
            <div
              className="p-3 h-[50px] min-w-[50px] flex justify-center items-center text-red-500 mb-3 icons"
              style={{ border: "2px solid red", borderRadius: "100%" }}
            >
              <IoCallOutline />
            </div>
            <div>
              <p className="p-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                mollitia?
              </p>
              <button className="inline-block cursor-pointer p-2 rounded-lg expnBtn">
                Explore
              </button>
            </div>
          </div>
          <div className="shadow-lg shadow-black w-[300px] hover:bg-[#EA3A51] flex gap-6 p-3 dAction">
            <div
              className="p-3 h-[50px] min-w-[50px] flex justify-center items-center text-red-500 mb-3 icons"
              style={{ border: "2px solid red", borderRadius: "100%" }}
            >
              <TbSteeringWheel />
            </div>
            <div>
              <p className="p-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                mollitia?
              </p>
              <button className="inline-block cursor-pointer p-2 rounded-lg  expnBtn">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <Link to="/details">
          <h1 className="px-5 py-2">Go To Details Page</h1>
        </Link>
      </div>

      <div className="p-2 flex flex-col bg-slate-500 text-white">
        <div className="p-2">
          <h4 className="mb-3">Maruti Dealers</h4>
          <p className="mb-3">
            Contact info <b> rksmotors@gmail.com</b>
          </p>
          <p className="mb-3">
            All rights Reserved for RKS MOTORS PVT LTD &copy; 2024
          </p>
          <div className="mt-10 flex flex-col gap-2">
            <h4>Contact Details</h4>
            <h4>RKS MOTORS PVT LTD</h4>
            <div>Somajiguda</div>
            <div>Hyderabad</div>
            <div className="flex mt-3 gap-2">
              <div>
                <IoCallOutline />
              </div>
              <p>9898989898</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
