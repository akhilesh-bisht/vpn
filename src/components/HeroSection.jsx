import Hero from "../assets/hero.svg";

const HeroSection = () => {
  return (
    <div
      id="about"
      className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-5"
    >
      <div className="lg:w-1/2 text-center lg:text-left">
        <p className="text-5xl font-bold mb-5">
          Want anything to be <br /> easy with LaslesVPN.
        </p>
        <p className="mb-5">
          Provide a network for all your needs with ease and fun using{" "}
          <span className="font-semibold">LaslesVPN</span>. Discover interesting
          features from us.
        </p>
        <button className="btn  border-none capitalize shadow-lg shadow-primary/50 w-48 py-2 rounded-lg bg-red-600 text-white font-medium hover:bg-red-800 hover:text-gray-950">
          Get Started
        </button>
      </div>
      <img src={Hero} alt="img" className="lg:w-1/2 mb-10 lg:mb-0" />
    </div>
  );
};

export default HeroSection;
