import { useEffect } from "react";
import Image1 from "../../assets/images/image 2.jpg";
import Image2 from "../../assets/images/image 4.jpg";
import Image3 from "../../assets/images/image 6.jpg";
import Frame1 from "../../assets/images/Frame 46.svg";
import Frame2 from "../../assets/images/Frame 47.svg";
import Frame3 from "../../assets/images/Frame 49.svg";
import Frame6 from "../../assets/images/Frame 48.svg";
import Frame4 from "../../assets/images/Frame 50.svg";
// import Frame5 from "../../assets/images/Frame 70.svg";
// import Frame7 from "../../assets/images/Frame 45.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Artists = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="">
            <div className="">
                <div className="back relative before:content-[''] before:absolute before:top-0 before:right-0 before:w-full before:h-full">
                    <div className="absolute bottom-6 flex justify-between pl-10 md:flex-col lg:flex-col lg:space-y-4">
                        <div className="w-[50%] md:w-full">
                            <p className="text-white text-[32px] font-heading leading-[52px] font-[700] tracking-[2%]">
                                "WE HELP ARTISTS FIND THEIR FANS"
                            </p>
                            <p className="text-[#6F767E] font-[400] font-body text-[19px] leading-[32px]">
                                Figma files can also be downloaded from our store. These files
                                include the latest Figma features and are synced{" "}
                            </p>
                        </div>
                        <div className="flex gap-x-20 md:w-full">
                            <div>
                                <img src={Image1} alt="img" />
                            </div>
                            <div>
                                <img src={Image3} alt="img" />
                            </div>
                            <div>
                                <img src={Image2} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="art relative">
                <div className="w-[1440px] max-w-[90%] m-auto py-10">
                    <div className="w-[665px] m-auto md:w-full">
                        <p className="text-center text-white text-[38px] leading-[59px] font-[700] font-heading md:text-[20px] md:leading-[32px]">
                            JOIN TOP ARTISTS, BUILD YOUR{" "}
                            <span className="text-yellow"> FANBASE</span>
                        </p>
                        <p className="text-center text-[#6F767E] text-[19px] leading-[32px] font-[400] font-body md:text-left md:leading-[28px]">
                            Figma files can also be downloaded from our store. These files{" "}
                            include the latest Figma features and are synced
                        </p>
                    </div>
                    <div className="space-y-10 pt-10">
                        <div
                            className="flex justify-between w-full md:gap-x-4"
                            data-aos="zoom-in"
                        >
                            <div>
                                <img src={Frame1} alt="img" className="w-[220px]" />
                            </div>
                            <div>
                                <img src={Frame6} alt="img" className="w-[220px]" />
                            </div>
                            <div>
                                <img src={Frame4} alt="img" className="w-[220px]" />
                            </div>
                        </div>
                        <div
                            className="flex justify-between w-[60%] m-auto md:gap-x-4"
                            data-aos="zoom-out"
                        >
                            <div className="">
                                <img src={Frame2} alt="img" className="w-[220px]" />
                            </div>
                            <div className="">
                                <img src={Frame3} alt="img" className="w-[220px]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Artists;
