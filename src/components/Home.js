import React from "react";
import Hero from "./Hero";
import OurVehicleList from "./OurVehicleList";
import Just from "./Just";
import ActionsPage from "./ActionsPage";
import Footer from "./Footer";
import InNewsPage from "./InNewsPage";
import LocatePage from "./LocatePage";
import LastPage from "./LastPage";

const Home = () => {
  return (
    <div>
      <Hero />
      <Just />
      <OurVehicleList />
      <ActionsPage />
      <InNewsPage />
      <LocatePage />
      {/* <LastPage /> */}
      <Footer />
    </div>
  );
};

export default Home;
