import React from "react";
import plan from "../assets/plan-box.svg";
import { FaCheck } from "react-icons/fa6";

const PlanSection = () => {
  return (
    <div id="pricing" className="container mx-auto py-20">
      <p className="text-3xl font-semibold  mt-7 text-center">
        Choose Your Plan
      </p>
      <p className="text-center mt-4">
        Let's choose the package that is best for you and <br /> explore it
        happily and cheerfully.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 py-10 gap-16 items-center ">
        {/* Plan components */}
        <PlanCard title="Free Plan" price="free" />
        <PlanCard title="Standard Plan" price="$9 / mo" />
        <PlanCard title="Premium Plan" price="$12 / mo" />
      </div>
    </div>
  );
};

const PlanCard = ({ title, price }) => {
  return (
    <div className="px-6 py-6 flex flex-col justify-center items-center gap-5 border border-gray-300 rounded-xl hover:border-red-600">
      <img src={plan} alt="plan" className="w-36 h-36" />
      <p className="text-xl font-semibold">{title}</p>
      <PlanFeature text="Unlimited Bandwidth" />
      <PlanFeature text="Encrypted Connection" />
      <PlanFeature text="No Traffic Logs" />
      <PlanFeature text="Works on All Devices" />
      <p className="text-2xl font-bold">{price}</p>
      <button className="btn btn-outline border-2 capitalize w-44 mx-auto hover:bg-red-500 hover:text-white hover:font-bold hover:border-none border-primary rounded-full text-red-600 border-red-600 py-2">
        Select
      </button>
    </div>
  );
};

const PlanFeature = ({ text }) => {
  return (
    <div className="flex gap-3 items-center">
      <FaCheck className="text-green-600" />
      <p className="flex-shrink">{text}</p>
    </div>
  );
};

export default PlanSection;
