import React from "react";

const Just = () => {
  return (
    <div className="p-2 min-h-[120px] bg-slate-700 text-white flex flex-col justify-center items-center gap-y-6 pb-4">
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
  );
};

export default Just;
