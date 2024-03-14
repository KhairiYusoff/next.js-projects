import Image from "next/image";
import React from "react";
import { CustomButton } from ".";

const Hero = () => {
  return (
    <div className="flex p-4">
      <div className="flex-1 mt-16">
        <h1 className="text-[48px] font-extrabold max-md:text-[30px]">
          Discover, reserve, and drive—effortlessly and swiftly!
        </h1>
        <p className="text-[18px] font-light mt-8">
          Simplify your car rental journey with our seamless booking process.
        </p>
        <button className="px-6 py-3 bg-blue-600 rounded-full mt-8 text-white">
          Explore Cars
        </button>
      </div>
      <div className="flex-1 relative">
        <div className="top-10 left-10 absolute z-20">
          <Image src="/hero.png" width={1000} height={500} alt="" />
        </div>
        <div className="absolute z-10">
          <Image src="/hero-bg.png" width={1000} height={1000} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
