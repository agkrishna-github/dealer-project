import React from "react";

const LocatePage = () => {
  return (
    <div className="p-2 mb-10">
      <h2 className="p-2 text-center md:text-xl">Locate a Dealer</h2>
      <div className=" flex justify-around gap-3 h-[400px] md:h-auto md:flex-col-reverse">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.742012848754!2d78.45476217516571!3d17.424164283469324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974b6feb9ea5%3A0x1e0a3e3dabcb8701!2sMaruti%20Suzuki%20Arena%20-%20Saboo%20RKS%20Motor%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1729393093307!5m2!1sen!2sin"
            style={{ border: "0", width: "400px", height: "400px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="maps"
          ></iframe>
        </div>
        <div className="p-2 flex flex-col  justify-center items-center gap-5 md:gap-0 location">
          <h2 className="p-1 md:text-xl">Dealer Location</h2>
          <h5 className="p-1 md:text-sm">RKS Maruti Dealers showroom</h5>
        </div>
      </div>
    </div>
  );
};

export default LocatePage;
