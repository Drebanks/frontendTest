import React from "react";
import Icon from "../../assets/images/Icon.svg";

const Footer = () => {
    return (
        <div className="bg-light w-full">
            <div className="w-[1440px] max-w-[90%] m-auto">
                <div className="flex justify-between py-8 border-b-[1px] border-border md:flex-col md:space-y-6">
                    <div>
                        <p className="text-white text-[21px] font-integral leading-[25px] font-[700]">
                            SHORT LINE ABOUT US
                        </p>
                        <p className=" text-white font-integral text-[21px] leading-[25px] font-[700]">
                            THREE WORDS HERE
                        </p>
                        <span className=" text-white normal-case font-integral text-[12px] leading-[16px] mt-3">
                            Short sentence here
                        </span>
                    </div>
                    <div className="w-[50%] flex justify-between md:w-full">
                        <div>
                            <p className="text-white text-[21px] font-integral leading-[25.2px] font-[700]">
                                CONNECT <br /> WITH <br /> US
                            </p>
                            {/* <p className="text-white text-[21px] leading-[25.2px] font-[700]">
                WITH
              </p>
              <p className="text-white text-[21px] leading-[25.2px] font-[700]">
                US
              </p> */}
                        </div>
                        <div>
                            <div className="flex gap-x-2">
                                <p className="text-white">Twitter</p>
                                <img src={Icon} alt="img" />
                            </div>
                            <div className="flex gap-x-2">
                                <p className="text-white">Discord</p>
                                <img src={Icon} alt="img" />
                            </div>
                            <div className="flex gap-x-2">
                                <p className="text-white">Instagram</p>
                                <img src={Icon} alt="img" />
                            </div>
                        </div>
                        <div>
                            <div className="flex gap-x-2">
                                <p className="text-white">Cookies</p>
                                <img src={Icon} alt="img" />
                            </div>
                            <div className="flex gap-x-2">
                                <p className="text-white">Licence</p>
                                <img src={Icon} alt="img" />
                            </div>
                            <div className="flex gap-x-2">
                                <p className="text-white">Contact</p>
                                <img src={Icon} alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between py-8 md:flex-col-reverse">
                    <div className="flex gap-x-8">
                        <p className="text-dark font-[400] font-body">
                            2022 {"\u25CF"} Platform
                        </p>
                        <p className="text-dark font-[400] font-body">2022</p>
                    </div>
                    <div className="flex justify-between w-1/2 md:w-full md:mb-4">
                        <p className="text-dark font-[400] font-body">TERMS & CONDITION</p>
                        <p className="text-dark font-[400] font-body">PRIVACY POLICY</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
