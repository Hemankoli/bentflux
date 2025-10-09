import React from 'react';
import {
  FaCloud,
  FaCubes,
  FaUserShield,
  FaClipboardList,
  FaServer,
} from "react-icons/fa";
import { NavLink, useParams } from 'react-router-dom';

export default function Service() {

    return (
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-[65%] bg-[#111] border border-gray-800 rounded-2xl shadow-xl py-10 px-14 flex items-start justify-between gap-16 text-gray-300 z-50 transition-all duration-300 ease-in-out">
            <div className="flex-1 pr-10 border-r border-gray-800">
                <h3 className="text-gray-400 uppercase p-2 text-xs font-semibold mb-4">
                    Platforms, Cloud & DevOps
                </h3>
                <div className="space-y-3 text-sm">
                    <NavLink to={"/platforms-cloud-and-devops/devops-assessment-and-cloud-strategy"} className="flex items-center gap-3 hover:text-white">
                        <FaCloud /> DevOps Assessment & Cloud Strategy
                    </NavLink>
                    <NavLink to={"/platforms-cloud-and-devops/ci-cd-and-gitops"} className="flex items-center gap-3 hover:text-white">
                        <FaCubes /> CI, CD and GitOps Consultation
                    </NavLink>
                    <NavLink to={"/platforms-cloud-and-devops/iac-and-configuration-management"} className="flex items-center gap-3 hover:text-white">
                        <FaServer /> IaC and Configuration Management
                    </NavLink>
                    <NavLink to={"/platforms-cloud-and-devops/ci-cd-and-gitops"} className="flex items-center gap-3 hover:text-white">
                        <FaUserShield /> DevSecOps & Compliance
                    </NavLink>
                    <NavLink to={"/platforms-cloud-and-devops/ci-cd-and-gitops"} className="flex items-center gap-3 hover:text-white">
                        <FaClipboardList /> SRE and Managed SRE Service
                    </NavLink>
                </div>
            </div>

            {/* Interface Design */}
            <div className="flex flex-col justify-center items-center">
                <h3 className="text-gray-400 uppercase text-xs font-semibold mb-4 self-start">
                    Interface Design
                </h3>
                <div className='bg-black rounded p-4'>
                    <img
                        src="https://cdn.prod.website-files.com/64215e3ab4bdc4653000f139/644774db8b0411e9eebc0c05_Group%201000005025-p-2000.png"
                        alt="Betaflux Sigma"
                        className="w-64 rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}
