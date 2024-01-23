import React, { useEffect } from "react";
import Frame from "../../assets/images/Frame 3.jpg";
import Left from "../../assets/images/Left.svg";
import Group from "../../assets/images/Group.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Career = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div className="w-[1440px] max-w-[90%] m-auto py-16">
                <div className="flex justify-between items-center w-full lg:gap-x-10 md:flex-col md:w-full md:space-y-8">
                    <div className="w-[45%] lg:w-full md:full" data-aos="flip-left">
                        <img src={Frame} alt="img" className="w-[537px]" />
                    </div>
                    <div
                        className="w-[45%] md:w-full lg:w-full"
                        data-aos="fade-down-right"
                    >
                        <div className="">
                            <p className="text-black font-heading text-[38px] leading-[50px] font-[700] tracking-[1%] md:text-[20px] md:leading-[32px]">
                                YOUR CAREER IS IN YOUR HANDS
                            </p>
                            <br />
                            <p className="text-black  text-[19px] leading-[32px] font-[400] font-body  md:text-[16px] md:leading-[28px]">
                                Figma files can also be downloaded from our store. These files
                                include the latest Figma features and are synced with the
                                Webflow template.
                            </p>
                            <br />
                            <p className="text-black  text-[19px] leading-[32px] font-[400] font-body  md:text-[16px] md:leading-[28px]">
                                Figma files can also be downloaded from our store. These files
                                include the latest Figma features and are synced
                            </p>
                            <br />
                            <p className="text-black  text-[19px] leading-[32px] font-[400] font-body  md:text-[16px] md:leading-[28px]">
                                Figma files can also be downloaded from our store. These files
                                include the latest Figma features and are synced with the
                                Webflow template.
                            </p>
                            <br />
                            <div className="flex gap-x-4 items-center">
                                <p className="text-black  text-[19px] leading-[32px] font-[400] font-body  md:text-[16px] md:leading-[28px]">
                                    Try it now
                                </p>
                                <img src={Left} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex md:flex-col">
                    <div
                        className="bg-yellow basis-[50%] flex items-center justify-center md:w-full"
                        data-aos="zoom-out"
                    >
                        <div className="p-20 backs md:p-6">
                            <p className="text-black font-heading text-[38px] leading-[52px] font-[700] tracking-[1%] md:text-[20px] md:leading-9">
                                USE YOUR STATS TO MAKE MOVES
                            </p>
                            <br />
                            <p className="text-black font-body font-[400] text-[19px] leading-[32px] md:text-[16px] md:leading-[28px]">
                                Figma files can also be downloaded from our store. These files
                                include the latest Figma features and are synced with the
                                Webflow template.
                            </p>
                            <br />
                            <p className="text-black font-body font-[400] text-[19px] leading-[32px] md:text-[16px] md:leading-[28px]">
                                Figma files can also be downloaded from our store. These files
                                include the latest Figma features and are synced
                            </p>
                            <br />
                            <p className="text-black font-[400] font-body  text-[19px] leading-[32px] md:text-[16px] md:leading-[28px]">
                                Figma files can also be downloaded from our store. These files
                                include the latest Figma features and are synced with the
                                Webflow template.
                            </p>
                            <br />
                            <div className="flex gap-x-4 items-center">
                                <p className="text-black font-body font-[400]  text-[19px] leading-[32px] md:text-[16px]">
                                    Try it now
                                </p>
                                <img src={Left} alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-black basis-1/2 md:w-full" data-aos="zoom-in">
                        <div className="p-20 md:px-8">
                            <div className="max-w-[557.75px] mx-auto md:w-full">
                                <img src={Group} alt="img" className="block mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Career;
