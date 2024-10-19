import React from "react";
import img1 from "../images/mahindra1.webp";
import img2 from "../images/mahindra2.webp";
import img3 from "../images/mahindra3.jpg";
import img4 from "../images/mahindra4.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => (
  <button
    {...props}
    className="text-red-500 rounded-full border-red-500 absolute -bottom-10 left-[50%] w-10 h-10  hover:bg-red-500 hover:text-white nextArrow"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
      />
    </svg>
  </button>
);
const PrevArrow = (props) => (
  <button
    {...props}
    className="text-red-500 rounded-full border-red-500 absolute -bottom-10 left-[45%] z-30 w-10 h-10  hover:bg-red-500 hover:text-white prevArrow "
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
      />
    </svg>
  </button>
);

const SliderPage = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    /* autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear", */
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    /* nextArrow: <Arrow />,
    prevArrow: <Arrow />, */
    initialSlide: 0,

    // cssEase: "linear",
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
  return (
    <div className="mb-2">
      <Slider
        {...settings}
        className="flex justify-center items-center gap-x-2 w-11/12 mx-auto"
      >
        <div className="h-[300px] w-[350px] md:h-[200px]  px-1 py-2 imgDiv2">
          <div className="w-full h-[200px] md:h-[100px] md:w-[160px] ">
            <img
              className="w-full h-full object-cover md:object-cover"
              src={img1}
              alt=""
            />
          </div>
          <div className="text-center">
            <h5 className="sliderh5">Bolero</h5>
            <p className="sliderp">Mahindra New Bolero</p>
          </div>
        </div>
        <div className="h-[300px] w-[350px] md:h-[200px]  px-1 py-2 imgDiv2">
          <div className="w-full h-[200px] md:h-[100px] md:w-[160px] ">
            <img
              className="w-full h-full object-cover md:object-cover"
              src={img2}
              alt=""
            />
          </div>
          <div className="text-center">
            <h5 className="sliderh5">SUV 500</h5>
            <p className="sliderp">New Mahendra SUV 500</p>
          </div>
        </div>
        <div className="h-[300px] w-[350px] md:h-[200px]  px-1 py-2 imgDiv2">
          <div className="w-full h-[200px] md:h-[100px] md:w-[160px] ">
            <img
              className="w-full h-full object-cover md:object-cover"
              src={img3}
              alt=""
            />
          </div>
          <div className="text-center">
            <h5 className="sliderh5">Scorpio</h5>
            <p className="sliderp">New Mahindra Scorpio</p>
          </div>
        </div>
        <div className="h-[300px] w-[350px] md:h-[200px]  px-1 py-2 imgDiv2">
          <div className="w-full h-[200px] md:h-[100px] md:w-[160px] ">
            <img
              className="w-full h-full object-cover md:object-cover"
              src={img4}
              alt=""
            />
          </div>
          <div className="text-center">
            <h5 className="sliderh5">Thar</h5>
            <p className="sliderp">New Mahindra Thar</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderPage;
