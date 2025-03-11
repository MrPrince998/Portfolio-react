import React from "react";
import HeroSection from "../components/HeroSection";
import BioSection from "../components/BioSection";
import RecentWork from "../components/RecentWork";
import ServiceSection from "../components/ServiceSection";
// import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <HeroSection/>
      <BioSection/>
      <RecentWork/>
      <ServiceSection/>
      {/* <Testimonial/> */}
    </>
  );
};

export default Home;
