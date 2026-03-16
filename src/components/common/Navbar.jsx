import { useState } from "react";

import { useEffect } from "react";
import Icons from "./Icons";

const navLinks = ["Home", "Programs", "How It Works", "Testimonial", "About"];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.style.height = "100vh";
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.height = "auto";
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.height = "auto";
            document.body.style.overflow = "auto";
        };
    }, [isOpen])

    return (
        <div className="relative">
            <div className="flex max-w-285 mx-auto justify-between items-center lg:px-4 lg:py-5">

                <div className="cursor-pointer sm:max-w-[132.1px] max-w-[90.1px] sm:max-h-15 w-full h-full">
                    <img src="/assets/images/svg/footerlogo.svg" alt="" />
                </div>
                <div className="lg:flex gap-6 hidden">
                    {navLinks.map(link => (
                        <a key={link} className={`${link === "Home" ? " font-semibold text-primary" :" text-secondary "} hover:underline  text-base cursor-pointer`}>{link}</a>
                    ))}
                </div>

                <button className="lg:block hidden hover:border-0 text-base hover:bg-ternary hover:text-white w-38.75 h-14 border-2 rounded-[200px] border-primary text-primary">
                    Contact Us
                </button>
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center z-50">
                    <span className={`block w-7 h-0.5 bg-primary transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`block w-7 h-0.5 bg-primary transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`block w-7 h-0.5 bg-primary transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
            </div>
            <div onClick={() => setIsOpen(false)} className={`lg:hidden fixed inset-0 bg-black/30 z-30 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} />
            <div className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-white z-40 flex flex-col pt-24 px-8 gap-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                {navLinks.map(link => (
                    <a key={link} onClick={() => setIsOpen(false)} className={` ${link === "Home" && "font-semibold text-primary"}cursor-pointer text-primary  text-base hover:font-semibold border-b border-gray-100 pb-4 hover:text-green transition-colors`}>
                        {link}
                    </a>
                ))}
                <button className="hover:bg-ternary hover:border-0 font-semibold hover:text-white h-14 border-2 rounded-[200px] border-primary text-primary text-base transition-colors">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default Navbar;