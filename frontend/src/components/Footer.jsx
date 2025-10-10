import React from "react";
import { AiOutlineKubernetes } from "react-icons/ai";
import { FaInstagram, FaLinkedin, FaDribbble, FaCloud, FaCubes, FaServer, FaUserShield, FaClipboardList } from "react-icons/fa";
import { TbContrast2Filled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Logo from "../shared/Logo";

export default function Footer() {
  return (
    <footer className="text-gray-400 px-4 md:px-10 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
        <div>
          <Logo />
          <div className="flex space-x-4 mt-8">
            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-gray-700">
              <FaInstagram className="text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-gray-700">
              <FaDribbble className="text-white" />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded hover:bg-gray-700">
              <FaLinkedin className="text-white" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[12px] font-semibold text-secondary mb-4">COMPANY</h3>
          <div className="space-y-3 text-sm">
            <NavLink onClick={() => window.screenTop({ top: 0, behavior: 'smooth' })} to={"/about/our-purpose"} className="flex items-center gap-3 hover:text-accent">
              Our Purpose
            </NavLink>
            <NavLink onClick={() => window.screenTop({ top: 0, behavior: 'smooth' })} to={"/about/our-story"} className="flex items-center gap-3 hover:text-accent">
              Our Story
            </NavLink>
            <NavLink onClick={() => window.screenTop({ top: 0, behavior: 'smooth' })} to={"/about/our-value"} className="flex items-center gap-3 hover:text-accent">
              Our Value
            </NavLink>
            <NavLink onClick={() => window.screenTop({ top: 0, behavior: 'smooth' })} to={"/contact-us"} className="flex items-center gap-3 hover:text-accent">
              Contact Us
            </NavLink>
          </div>
        </div>
        <div>
          <h3 className="text-[12px] font-semibold text-secondary mb-4">
            PLATFORMS, CLOUD & DEVOPS
          </h3>
          <div className="space-y-3 text-sm">
            <NavLink onClick={() => window.screenTop({ top: 0, behavior: 'smooth' })} to={"/platforms-cloud-and-devops/devops-assessment-and-cloud-strategy"} className="flex items-center gap-3 hover:text-accent">
              <FaCloud /> DevOps Assessment & Cloud Strategy
            </NavLink>
            <NavLink onClick={() => window.screenTop({ top: 0, behavior: 'smooth' })} to={"/platforms-cloud-and-devops/ci-cd-and-gitops"} className="flex items-center gap-3 hover:text-accent">
              <FaCubes /> CI, CD and GitOps Consultation
            </NavLink>
            <NavLink onClick={() => window.screenTop({ top: 0, behavior: 'smooth' })} to={"/platforms-cloud-and-devops/iac-and-configuration-management"} className="flex items-center gap-3 hover:text-accent">
              <FaServer /> IaC and Configuration Management
            </NavLink>
            <NavLink onClick={() => window.screenTop({ top: 0, behavior: 'smooth' })} to={"/platforms-cloud-and-devops/kubernetes-consultation"} className="flex items-center gap-3 hover:text-accent">
              <AiOutlineKubernetes /> 360° Kubernetes Consultation
            </NavLink>
            <NavLink onClick={() => window.screenTop({ top: 0, behavior: 'smooth' })} to={"/platforms-cloud-and-devops/devsecops-and-compliance"} className="flex items-center gap-3 hover:text-accent">
              <FaUserShield /> DevSecOps & Compliance
            </NavLink>
            <NavLink onClick={() => window.screenTop({ top: 0, behavior: 'smooth' })} to={"/platforms-cloud-and-devops/multi-cloud-strategy-and-migration"} className="flex items-center gap-3 hover:text-accent">
              <FaClipboardList /> Multi-Cloud Strategy and Migration
            </NavLink>
            <NavLink onClick={() => window.screenTop({ top: 0, behavior: 'smooth' })} to={"/platforms-cloud-and-devops/disaster-recovery-and-continuity-plan"} className="flex items-center gap-3 hover:text-accent">
              <TbContrast2Filled /> Disaster Recovery and Continuity Plan
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-secondary pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>{new Date().getFullYear()} ANBSTACK</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <p className="hover:text-white">Terms of Service</p>
          <p className="hover:text-white">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}
