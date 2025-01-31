import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const PortfolioHero = () => {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const skills = [
    "Web Developer",
    "Mobile App Developer",
    "Machine Learning Engineer",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % skills.length);
        setIsTransitioning(false);
      }, 300); // Reduced transition time for smoother effect
    }, 2500); // Reduced delay for better flow

    return () => clearInterval(intervalId);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center relative px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-gray-900/30" />

      <div className="z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-blue-400 font-medium text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
          Welcome to my portfolio
        </h2>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 tracking-tight">
          Akash Shinde
        </h1>

        <div className="h-16 mb-6 sm:mb-8">
          <p
            className={`text-xl sm:text-2xl md:text-3xl text-gray-300 transition-all duration-300 ease-in-out
              ${isTransitioning ? "opacity-0 transform -translate-y-2" : "opacity-100 transform translate-y-0"}`}
          >
            I am a{" "}
            <span className="text-blue-400 font-medium">
              {skills[currentSkillIndex]}
            </span>
          </p>
        </div>

        {/* Responsive Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
              3+
            </h3>
            <p className="text-lg sm:text-xl text-gray-400">
              Projects Completed
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">
              10+
            </h3>
            <p className="text-lg sm:text-xl text-gray-400">Technologies</p>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 
            hover:text-white transition-colors duration-300 animate-bounce"
        >
          <FaChevronDown size={35} />
        </button>
      </div>

      {/* Decorative Blurry Circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-blue-600/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-blue-400/10 rounded-full filter blur-3xl" />
    </div>
  );
};

export default PortfolioHero;
