import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { FcPrevious } from "react-icons/fc";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";

const CustomerCard = ({
  name,
  location,
  rating,
  testimonial,
  image,
  isActive,
}) => {
  return (
    <div
      className={`space-y-4 px-4 py-4 border-2 border-gray-400 rounded-xl ${
        isActive ? "border-red-500" : "hover:border-primary"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img className="w-[20%] rounded-[50%]" src={image} alt={name} />
          <div>
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-xs text-gray-400">{location}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p>{rating}</p>
          <FaStar className="text-yellow-500" />
        </div>
      </div>
      <p className="font-medium">{testimonial}</p>
    </div>
  );
};

const CustomerSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const customers = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      testimonial: `“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.`,
      image: p1,
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      testimonial: `“I like it because i like to travel far and still can connect with high speed”.`,
      image: p2,
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      testimonial: `“This is very unusual for my business that currently requires a virtual private network that has high security”.`,
      image: p3,
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      testimonial: `“This is very unusual for my business that currently requires a virtual private network that has high security”.`,
      image: p4,
    },
    {
      name: "Kim Young Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      testimonial: `“This is very unusual for my business that currently requires a virtual private network that has high security”.`,
      image: p5,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customers.length - 3 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customers.length - 3 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto">
      <div className="text-3xl font-semibold text-center">
        Trusted by Thousands of Happy Customers
      </div>
      <div className="text-center pb-16 pt-3">
        These are the stories of our customers who have joined us with great
        <br /> pleasure when using this crazy feature.
      </div>
      <div className="flex-col flex gap-16 md:flex md:flex-row   ">
        {customers
          .slice(currentIndex, currentIndex + 3)
          .map((customer, index) => (
            <CustomerCard
              key={index}
              name={customer.name}
              location={customer.location}
              rating={customer.rating}
              testimonial={customer.testimonial}
              image={customer.image}
              isActive={index === 1} // Apply red border to the middle container
            />
          ))}
      </div>
      <div className="flex justify-center mt-4">
        <FcPrevious
          className="cursor-pointer w-7 h-10 text-red-700"
          onClick={handlePrev}
        />
        <MdNavigateNext
          className="cursor-pointer w-10 h-10 text-red-700"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default CustomerSection;
