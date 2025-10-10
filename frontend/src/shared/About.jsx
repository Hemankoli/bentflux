import React from 'react'
import { NavLink } from 'react-router-dom'

export default function About() {
    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-auto bg-mainBg border-none rounded-2xl shadow-xl py-10 px-14 flex items-start justify-between gap-16 text-gray-300 z-50 transition-all duration-300 ease-in-out">
            <div className="px-10">
                <h3 className="text-primary uppercase text-xs font-semibold mb-4">
                    About Betaflux
                </h3>
                <div className="space-y-3 text-sm">
                    <NavLink to={"/about/our-purpose"} className="flex items-center gap-3 hover:text-accent">
                        Our Purpose
                    </NavLink>
                    <NavLink to={"/about/our-story"} className="flex items-center gap-3 hover:text-accent">
                        Our Story
                    </NavLink>
                    <NavLink to={"/about/our-value"} className="flex items-center gap-3 hover:text-accent">
                        Our Value
                    </NavLink>
                    <NavLink to={"/contact-us"} className="flex items-center gap-3 hover:text-accent">
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
