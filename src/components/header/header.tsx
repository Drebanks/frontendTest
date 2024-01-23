import { useState } from "react";
import Nav from "../navbar/navbar";
import Hero from "../hero";
import Close from "../../assets/images/close.svg";

const Header = () => {
    const [nav, setNav] = useState(false);
    const [show, setShow] = useState(false);
    const closeMobileMenu = () => setNav(false);
    const closeMobile = () => setShow(false);

    const handleClick = (event: React.MouseEvent) => {
        setNav(true);
    };

    const open = () => {
        setShow(true);
    };

    return (
        <header className="bg-black w-full">
            <div className="w-[1440px] max-w-[90%] m-auto py-8 ">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <p className="text-yellow font-[700] text-[21px] tracking-[11.5%] leading-[25px]">
                            LOGO
                        </p>
                    </div>
                    <div className="w-1/2 md:hidden">
                        <Nav />
                    </div>
                    <div className="hidden md:block md:mr-5 sm:block sm:mr-5">
                        <i className="fa fa-bars" onClick={handleClick}></i>
                    </div>
                </div>
                {nav && (
                    <div className="bg-blur backdrop-blur w-screen h-screen overflow-x-hidden z-[1000] fixed left-0 top-0">
                        <div className="bg-white w-[70%] h-screen fixed top-0 right-0">
                            <div className="flex justify-between px-[20px] py-6 border-b-[1px] border-[#C4C4C4]">
                                <a href="/" onClick={closeMobileMenu}>
                                    <p className="text-yellow font-[700] text-[21px] tracking-[11.5%] leading-[25px]">
                                        LOGO
                                    </p>
                                </a>
                                <img src={Close} alt="Close" onClick={closeMobileMenu} />
                            </div>
                            <ul className="">
                                <li className="text-black font-ProductSans text-lg leading-[160%] py-6 px-[20px]">
                                    Feature
                                </li>
                                <li className="text-black text-lg leading-[160%] py-6 px-[20px]">
                                    New
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                <Hero />
            </div>
        </header>
    );
};

export default Header;
