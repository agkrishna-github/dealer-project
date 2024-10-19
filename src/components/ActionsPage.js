import React from "react";
import { FaQuestion } from "react-icons/fa";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import { TbSteeringWheel } from "react-icons/tb";
import { Link } from "react-router-dom";

const ActionsPage = () => {
  return (
    <div className="mt-16 w-[90%]  mx-auto lg:mt-16 qactions" id="buy">
      <h2 className="p-2 text-center mb-3 mt-5">Quick Actions</h2>
      <div className="p-3 flex flex-wrap gap-x-6 gap-6">
        <div className="w-[300px] hover:bg-[#EA3A51]  flex gap-6 p-3 dAction">
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
        <div className="w-[300px] hover:bg-[#EA3A51] flex gap-6 p-3 dAction">
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
        <div className="w-[300px] hover:bg-[#EA3A51] flex gap-6 p-3 dAction">
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
        <div className="w-[300px] hover:bg-[#EA3A51] flex gap-6 p-3 dAction">
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
      <div className="my-12">
        <Link to="/details">
          <h1 className="px-5 py-2">Go To Details Page</h1>
        </Link>
      </div>
    </div>
  );
};

export default ActionsPage;
