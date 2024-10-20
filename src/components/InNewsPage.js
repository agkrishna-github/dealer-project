import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => (
  <button
    {...props}
    className="text-red-500 rounded-full border-red-500 lg:border-none absolute -bottom-10 left-[50%] w-10 h-10  hover:bg-red-500 hover:text-white lg:w-5 lg:h-5 lg:hover:bg-white lg:hover:text-red-600 newsNextArrow"
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
    className="text-red-500 rounded-full border-red-500 lg:border-none  absolute -bottom-10 left-[45%]  z-30 w-10 h-10 lg:w-5 lg:h-5 hover:bg-red-500 lg:hover:bg-white lg:hover:text-red-600 hover:text-white newsPrevArrow "
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

const InNewsPage = () => {
  const InnewsDetails = [
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLzMewm9M3ac5D7CwpyDkmTiVzt-m282t1A&s",
      title: "Towards a zero Pollution nation",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/546e09_238091e750954fcea346a856757aa927~mv2.jpg/v1/fill/w_640,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/546e09_238091e750954fcea346a856757aa927~mv2.jpg",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPa8993CloAjE6hVRxv_fZHJ_DVXCyfFpaJg&s",
      title: "Towards a zero Pollution nation",
    },
    {
      imgUrl:
        "https://flywheelcars.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-12-at-8.06.07-PM-2.jpeg",
      title: "Towards a zero Pollution nation",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className="">
      <div className="">
        <h2 className="text-center mb-5">In News</h2>
        <Slider {...settings} className="newsMainDiv w-[80%] mx-auto">
          {InnewsDetails.map((item, index) => (
            <div
              className=" imgDiv3 w-[250px] h-[300px] lg:w-[150px] lg:h-[200px]"
              key={index}
            >
              <div className=" w-[250px] h-[200px] lg:w-[150px] lg:h-[100px]">
                <img
                  src={item.imgUrl}
                  alt=""
                  className="w-full h-full object-fill "
                />
              </div>
              <p className="pt-4">{item.title}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className=" h-[80px] flex justify-center items-center">
        <button className="inline-block px-3 py-2 bg-white rounded-lg hover:bg-slate-800">
          View All
        </button>
      </div>
    </div>
  );
};

export default InNewsPage;
