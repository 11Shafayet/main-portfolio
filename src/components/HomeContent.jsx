import React from 'react';
import OpenToWork from '../components/OpenToWork';

import ownImage from '../assets/own.png';
import Social from '../components/Social';

const HomeContent = () => {
  return (
    <div className="relative z-10">
      <div className="max-w-3xl py-8 md:py-12 px-12">
        <img
          src={ownImage}
          alt="Shafayet"
          className="w-24 h-24 object-cover rounded-xl mb-6"
        />
        <h2 className="text-2xl sm:text-[40px] sm:leading-tight mb-2">
          Hey, I'm Shafayet — I'm a React Developer & I love to code!
        </h2>
        <p className="text-lg font-light opacity-75 mb-12">
          I am a seasoned React Developer with 2 years of experience
          specializing in React, Next JS that drive innovation and efficiency.
        </p>
        <Social />
      </div>
      <OpenToWork />
    </div>
  );
};

export default HomeContent;
