import React from "react";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="p-2 flex flex-wrap gap-5 h-fit w-[80%] mx-auto mb-14">
      <div className=" w-[150px] p-2 flex flex-col gap-y-2 footerDiv">
        <h5 className="">Services</h5>
        <div className="">Producs</div>
        <div className="">True value</div>
        <div className="">Workshop</div>
        <div className="">Commercial</div>
        <div className="">Light weight</div>
      </div>
      <div className="w-[150px] p-2 flex flex-col gap-y-2 footerDiv">
        <h5 className="">Branches</h5>
        <div className="">Somajiguda</div>
        <div className="">Malakpet</div>
        <div className="">Kukatpally</div>
        <div className="">Secunderabad</div>
      </div>
      <div className="w-[150px] p-2 flex flex-col gap-y-2 footerDiv">
        <h5 className="">Workshops</h5>
        <div className="">Somajiguda</div>
        <div className="">Malakpet</div>
        <div className="">Kukatpally</div>
        <div className="">Nampally</div>
      </div>

      {/*  <div className="p-2">
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
      </div> */}
    </div>
  );
};

export default Footer;
