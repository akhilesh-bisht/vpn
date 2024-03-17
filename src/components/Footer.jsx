import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <>
      <div id="help" className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row justify-between items-center shadow-2xl shadow-gray-400 bg-gray-50 rounded-xl px-10 py-10">
          <div className="space-y-2 text-center md:text-left md:w-1/2">
            <p className="text-3xl font-bold">
              Subscribe Now for <br /> Get Special Features!
            </p>
            <p>Let's subscribe with us and find the fun.</p>
          </div>
          <button className="btn bg-primary border-none bg-red-600 py-2 rounded-md text-white font-bold capitalize shadow-lg shadow-primary/50 w-full md:w-48 mt-4 md:mt-0 hover:bg-red-400">
            Subscribe Now
          </button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto py-20 bg-gray-100 ">
        <div className="flex gap-16 justify-evenly flex-wrap">
          <div className="space-y-4">
            <p className="text-xl font-semibold">
              {" "}
              <img src={logo} alt="" />
            </p>
            <p>
              Lasles <b>VPN</b> is a private virtual network that <br /> has
              unique features and has high security.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-white w-9 h-9 rounded-[50%] flex items-center justify-center">
                <FaFacebookF className="text-red-600 cursor-pointer" />
              </div>
              <div className="bg-white w-9 h-9 rounded-[50%] flex items-center justify-center">
                <FaTwitter className="text-red-600 cursor-pointer" />
              </div>
              <div className="bg-white w-9 h-9 rounded-[50%] flex items-center justify-center">
                <FaInstagram className="text-red-600 cursor-pointer" />
              </div>
            </div>
            <p className="text-gray-400">
              ©2020 Lasles<b>VPN</b>
            </p>
          </div>
          <FooterSection
            title="Product"
            items={[
              "Download",
              "Pricing",
              "Locations",
              "Server",
              "Countries",
              "Blog",
            ]}
          />
          <FooterSection
            title="Engage"
            items={[
              "Download",
              "Pricing",
              "Locations",
              "Server",
              "Countries",
              "Blog",
            ]}
          />
          <FooterSection title="Earn Money" items={["Download", "Pricing"]} />
        </div>
      </div>
    </>
  );
};

const FooterSection = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <p className="text-xl font-semibold">{title}</p>
      {items.map((item, index) => (
        <p className="cursor-pointer hover:text-red-500" key={index}>
          {item}
        </p>
      ))}
    </div>
  );
};

export default Footer;
