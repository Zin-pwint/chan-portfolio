import React from "react";
import AboutBank from "../Components/AboutPage/AboutBank";
import { BankHistory } from "../Components/AboutPage/BankHistory";
import BusinessProfile from "../Components/AboutPage/BusinessProfile";
import DashboardGrid from "../Components/AboutPage/DashboardGrid";

const About = () => {
  return (
    <>
      <AboutBank />
      <BankHistory />
      <BusinessProfile />
      <DashboardGrid />
    </>
  );
};

export default About;
