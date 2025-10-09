import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import PrimaryButton from "../shared/PrimaryButton";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

export default function Hamburger({ setModal }) {
    const [showNav, setShowNav] = useState(null);

    function closeMenu() {
        setModal(null);
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    function showSection(index) {
        if (showNav === index) setShowNav(null)
        else setShowNav(index);
    }

    return (
        <div className="fixed inset-0 bg-black/60 z-40 flex justify-end">
            <div className="w-[90%] bg-gray-900 min-h-full shadow-lg animate-slide-in">
                <button
                    onClick={closeMenu}
                    className="absolute top-8 right-8 text-gray-600 hover:text-black"
                >
                    <IoClose size={28} />
                </button>

                <div className="md:hidden flex flex-col space-y-6 pt-20 pb-10 p-8">
                    <div className="flex flex-col gap-2 border-b border-borderColor pt-2 pb-4">
                        <button onClick={() => showSection("services")} className="flex items-center justify-between">
                            <div className="text-[16px] text-headerText font-baskervville font-[600]">Services</div>
                            <IoIosArrowUp className={`text-headerText w-5 h-5 ${showNav === "services" ? "" : "rotate-180"}`} />
                        </button>
                        <ul className={`flex flex-col gap-2 text-[14px] font-[400] ${showNav === "services" ? "flex" : "hidden"}`}>
                           <NavLink onClick={closeMenu} to={"/products"}>DevOps Assessment & Cloud Strategy</NavLink>
                           <NavLink onClick={closeMenu} to={"/products"}> CI, CD and GitOps Consultation</NavLink>
                           <NavLink onClick={closeMenu} to={"/products"}>IaC and Configuration Management</NavLink>
                           <NavLink onClick={closeMenu} to={"/products"}>DevSecOps & Compliance</NavLink>
                           <NavLink onClick={closeMenu} to={"/products"}>SRE and Managed SRE Service</NavLink>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 border-b border-borderColor pt-2 pb-4">
                        <button onClick={() => showSection("about")} className="flex items-center justify-between">
                            <div className="text-[16px] text-headerText font-baskervville font-[600]">About Betaflux</div>
                            <IoIosArrowUp className={`text-headerText w-5 h-5 ${showNav === "about" ? "" : "rotate-180"}`} />
                        </button>
                        <div className={`flex flex-col gap-2 text-[14px] text-headerText font-baskervville font-[400] ${showNav === "about" ? "flex" : "hidden"}`}>
                            <NavLink onClick={closeMenu} to={"/abouts"}>Our Purpose</NavLink>
                            <NavLink onClick={closeMenu} to={"/abouts"}>Our Story</NavLink>
                            <NavLink onClick={closeMenu} to={"/abouts"}>Our Value</NavLink>
                            <NavLink onClick={closeMenu} to={"/abouts"}>Community to Open Source</NavLink>
                            <NavLink onClick={closeMenu} to={"/abouts"}>Customer Service</NavLink>
                        </div>
                    </div>
                    <Link
                        to="/contact-us"
                        className="hover:text-white"
                    >
                        Contact Us
                    </Link>
                </div>
                <div className="md:hidden p-4">
                    <PrimaryButton name={"Request a consultation"} />
                </div>
            </div>
        </div>
    );
}