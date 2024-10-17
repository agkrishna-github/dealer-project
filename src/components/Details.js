import React, { useEffect } from "react";

const Details = () => {
  useEffect(() => {
    document.title = "Vehicle Details Page";
  }, []);
  return (
    <div>
      <h3>Details Page</h3>
    </div>
  );
};

export default Details;
