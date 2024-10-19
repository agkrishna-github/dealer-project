import React from "react";
import { IoCallOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="p-2 flex flex-col bg-slate-500 text-white" id="contact">
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
  );
};

export default Footer;
