import React from "react";
import Hero from "./Hero";
import OurVehicleList from "./OurVehicleList";
import Just from "./Just";
import ActionsPage from "./ActionsPage";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <Just />
      <OurVehicleList />
      <ActionsPage />
      <Footer />
    </div>
  );
};

export default Home;
