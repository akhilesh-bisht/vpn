import React from "react";
import world from "../assets/world.svg";
import sponsored from "../assets/sponsored.png";
const GlobalNetworkSection = () => {
  return (
    <div
      id="testimonials"
      className="container mx-auto pt-11 flex flex-col gap-5 justify-center items-center"
    >
      <p className="text-3xl font-semibold text-center">
        Huge Global Network <br /> of Fast VPN
      </p>
      <p className="text-center pb-16">
        See LaslesVPN everywhere to make it easier for you when you move <br />{" "}
        locations.
      </p>
      <img className="w-[58%]" src={world} alt="company" />
      <img src={sponsored} alt="company" />
    </div>
  );
};

export default GlobalNetworkSection;
