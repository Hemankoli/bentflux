import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-auto bg-[#111] border border-gray-800 rounded-2xl shadow-xl py-10 px-14 flex items-start justify-between gap-16 text-gray-300 z-50 transition-all duration-300 ease-in-out">
            <div className="flex-1 pr-10 border-r border-gray-800">
                <h3 className="text-gray-400 uppercase p-2 text-xs font-semibold mb-4">
                    About Betaflux
                </h3>
                <div className="space-y-3 text-sm">
                    <NavLink to={"/"} className="flex items-center gap-3 hover:text-white">
                        Our Purpose
                    </NavLink>
                    <NavLink to={"/"} className="flex items-center gap-3 hover:text-white">
                        Our Story
                    </NavLink>
                    <NavLink to={"/"} className="flex items-center gap-3 hover:text-white">
                        Our Value
                    </NavLink>
                    <NavLink to={"/"} className="flex items-center gap-3 hover:text-white">
                        Community to Open Source
                    </NavLink>
                    <NavLink to={"/"} className="flex items-center gap-3 hover:text-white">
                        Customer Service
                    </NavLink>
                    <NavLink to={"/"} className="flex items-center gap-3 hover:text-white">
                        Contact Us
                    </NavLink>
                </div>
            </div>

            {/* Interface Design */}
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-gray-400 uppercase text-xs font-semibold mb-4 self-start">
                    Interface Design
                </h3>
                <img
                    src="https://cdn.prod.website-files.com/64215e3ab4bdc4653000f139/6445a1e5415fbb3091dcc5ae_drmakete-lab-hsg538WrP0Y-unsplash%201%20(1).jpg"
                    alt="Betaflux Sigma"
                    className="w-64 rounded-lg"
                />
            </div>
        </div>
    )
}
