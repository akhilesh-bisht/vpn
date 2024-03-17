import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import hero from "../assets/hero2.svg";

const FeaturesSection = () => {
  return (
    <div id="features" className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center h-screen">
        <img src={hero} alt="" className="mb-10 lg:mb-0 lg:w-1/2" />
        <div className="lg:w-1/2 flex flex-col gap-10 text-center ml-8 lg:text-left">
          <p className="text-3xl lg:text-5xl font-bold">
            We Provide Many <br /> Features You Can Use
          </p>
          <p className="text-sm lg:text-base">
            You can explore the features that we provide with fun <br /> and
            have their own functions each feature.
          </p>
          <FeatureItem text="Powerful online protection." />
          <FeatureItem text="Internet without borders." />
          <FeatureItem text="Supercharged VPN." />
          <FeatureItem text="No specific time limits." />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ text }) => {
  return (
    <div className="flex gap-5 items-center">
      <FaCheckCircle className="text-green-700" />
      <p>{text}</p>
    </div>
  );
};

export default FeaturesSection;
