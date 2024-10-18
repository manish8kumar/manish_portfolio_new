import React from 'react';
import HeroBgAnimation from '../HeroBgAnimation/HeroBgAnimation.jsx';
import HeroImg from '../../images/HeroImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
  return (
    <div id="about" className="relative py-20 px-8 lg:px-32 bg-card_light">
      {/* Hero Background */}
      <div className="absolute inset-0 flex justify-end items-center w-full h-full overflow-hidden">
        <HeroBgAnimation />
      </div>

      {/* Hero Inner Container */}
      <div className="relative flex flex-col lg:flex-row justify-between items-center max-w-screen-xl mx-auto space-y-8 lg:space-y-0">
        {/* Left Container */}
        <div className="w-full text-center lg:text-left lg:order-1 space-y-6">
          <h1 className="text-5xl font-bold text-text_primary leading-tight  lg:text-6xl">
            Hi, I am <br /> {Bio.name}
          </h1>
          <div className="text-2xl font-semibold  flex justify-center lg:justify-start items-center space-x-3">
            I am a 
            <span className="text-primary ml-2">
              <Typewriter 
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <p className="text-lg text-[#f2f3f4] opacity-90 max-w-md mx-auto lg:mx-0">
            {Bio.description}
          </p>
          <a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
          >
            Check Resume
          </a>
        </div>

        {/* Right Container */}
        <div className="w-full flex justify-center lg:justify-end items-center lg:order-2">
          <img
            src={HeroImg}
            alt="hero-image"
            className="w-64 h-64 lg:w-96 lg:h-96 rounded-full border-4 border-purple-600 object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
