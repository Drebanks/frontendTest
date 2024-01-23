import React, { useEffect } from "react";
import Arrow from "../assets/images/Arrow - Left.svg";
import Frame1 from "../assets/images/Frame 1.jpg";
import Frame2 from "../assets/images/Frame 2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="pt-20 relative hero bg-black w-full h-screen lg:pt-0 lg:h-full ">
      <div className="w-[1440px] max-w-[90%] m-auto py-8">
        <div className="flex items-center md:flex-col lg:flex-col lg:space-y-10">
          <div className="w-[710px] md:w-full lg:w-full">
            <p className="text-white font-heading font-[700] text-[54px] leading-[76px] md:text-[20px] md:leading-9">
              AN INNOVATIVE PLATFORM THAT{" "}
              <span className="text-yellow">SUPPORTS ARTISTS.</span>
            </p>
            <p className="text-white font-[400] font-body text-[19px] leading-[32px] w-[507px] md:w-full lg:w-full">
              Figma files can also be downloaded from our store. These files
              include the latest Figma features and are{" "}
            </p>
            <div className="flex gap-x-2 mt-4">
              <p className="text-yellow font-[400] font-body text-[17px] leading-[20px]">
                Try it now!
              </p>
              <img src={Arrow} alt="" />
            </div>
          </div>
          <div className="w-1/2 flex gap-x-10 md:w-full lg:w-full">
            <div className="hidden lg:block lg:flex lg:gap-x-10 lg:w-full">
              <div className="" data-aos="fade-in">
                <img src={Frame1} alt="img" className="h-[376px] lg:h-auto" />
              </div>
              <div className="" data-aos="zoom-in">
                <img src={Frame2} alt="img" className="h-[376px] lg:h-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="absolute bottom-20 left-[620px]" data-aos="fade-in">
            <img src={Frame1} alt="img" className="h-[376px] lg:h-auto" />
          </div>
          <div className="absolute top-0 right-10" data-aos="zoom-in">
            <img src={Frame2} alt="img" className="h-[376px] lg:h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
