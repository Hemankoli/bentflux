import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Service from "../shared/Service";
import About from "../shared/About";
import {TfiMenu} from "react-icons/tfi";
import { AnimatePresence, motion } from "framer-motion";
import Hamburger from "./Hamburger";
import PrimaryButton from "../shared/PrimaryButton";


export default function Navbar() {
  const [modal, setModal] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <header
      className="relative bg-transparent text-gray-400 max-w-7xl mx-auto px-6 md:px-10 py-6"
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center">
        <Link to={"/"} className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-blue-500 rounded-sm"></div>
          <span className="font-semibold text-xl text-white">Betaflux</span>
        </Link>

        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <div
            onMouseEnter={() => handleMouseEnter("services")}
            className="hover:text-white cursor-pointer relative"
          >
            Services
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("about")}
            className="hover:text-white"
          >
            About
          </div>
          <Link
            onMouseEnter={() => handleMouseEnter("contact")}
            to="/contact-us"
            className="hover:text-white"
          >
            Contact Us
          </Link>
        </div>
        <div className="md:flex hidden">
          <PrimaryButton method={() => navigate("/contact-us")}  name={"Request a consultation"} />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setModal("toggle-menu")}
            className="p-2 transition"
          >
            <TfiMenu size={22} className="text-gray-700" />
          </button>
        </div>
      </div>
      {activeMenu === "services" && (<Service />)}
      {activeMenu === "about" && (<About />)}
      <AnimatePresence>
        {modal === "toggle-menu" && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 max-w-sm h-full z-40"
          >
            <Hamburger
              modal={modal}
              setModal={setModal}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
