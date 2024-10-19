import React from "react";

const SuvList = () => {
  const SuvList = [
    {
      name: "Thar",
      imgUrl:
        "https://auto.mahindra.com/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw63122961/images/THRN/xlarge/Thar_624x296.png",
    },
    {
      name: "Suv 300",
      imgUrl:
        "https://auto.mahindra.com/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwfbfbcf05/images/SCN/xlarge/ScorpioN_624x296.png",
    },
    {
      name: "BOLERO NIO PLUS",
      imgUrl:
        "https://auto.mahindra.com/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw4ddb6399/images/NEOP/xlarge/BoleroNeoPlus_624x296.png",
    },
    {
      name: "MARRAZZO",
      imgUrl:
        "https://auto.mahindra.com/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw4b0c5e48/images/MRZO/xlarge/marazzo_3_white_900%20x%20439.png",
    },
    {
      name: "BOLERO NEO",
      imgUrl:
        "https://auto.mahindra.com/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwd35640a9/images/NEO/xlarge/BoleroNeo_624x296.png",
    },
    {
      name: "XUV 700",
      imgUrl:
        "https://auto.mahindra.com/on/demandware.static/-/Sites-mahindra-product-catalog/default/dwc53840ab/images/X700/xlarge/XUV700_624x296.png",
    },
  ];

  return (
    <div className="bg-white text-black suvList">
      <div className="flex flex-wrap gap-2 suvListDiv">
        {SuvList.map((item, index) => (
          <div className="w-[250px] h-[150px]">
            <div className="w-full h-[80%] ">
              <img
                src={item.imgUrl}
                alt=""
                className="w-full h-full object-fill"
              />
            </div>
            <p className="text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuvList;
