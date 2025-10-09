import React from "react";
import { FaInstagram, FaLinkedin, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-400 px-4 md:px-10 py-16 border-t border-gray-800 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-blue-500 rounded-sm"></div>
            <span className="font-semibold text-xl text-white">Betaflux</span>
          </div>
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
          <h3 className="text-[12px] font-semibold text-gray-500 mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li className="text-[14px] hover:text-white cursor-pointer">About Betaflux</li>
            <li className="text-[14px] hover:text-white cursor-pointer">Our Story</li>
            <li className="text-[14px] hover:text-white cursor-pointer">Our Values</li>
            <li className="text-[14px] hover:text-white cursor-pointer">Careers</li>
            <li className="text-[14px] hover:text-white cursor-pointer">Customer Stories</li>
            <li className="text-[14px] hover:text-white cursor-pointer">Blog</li>
            <li className="text-[14px] hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[12px] font-semibold text-gray-500 mb-4">
            PLATFORMS, CLOUD & DEVOPS
          </h3>
          <ul className="space-y-2">
            <li className="text-[14px] hover:text-white cursor-pointer">DevOps Assessment And Strategy</li>
            <li className="text-[14px] hover:text-white cursor-pointer">CI, CD And GitOps Consultation</li>
            <li className="text-[14px] hover:text-white cursor-pointer">IaC and Configuration Management</li>
            <li className="text-[14px] hover:text-white cursor-pointer">360° Kubernetes Consultation</li>
            <li className="text-[14px] hover:text-white cursor-pointer">DevSecOps And Compliance</li>
            <li className="text-[14px] hover:text-white cursor-pointer">SRE and Managed SRE Services</li>
            <li className="text-[14px] hover:text-white cursor-pointer">Multi-Cloud Strategy And Migration</li>
            <li className="text-[14px] hover:text-white cursor-pointer">Disaster Recovery And Continuity Planning</li>
            <li className="text-[14px] hover:text-white cursor-pointer">DevOps And DevSecOps Training</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[12px] font-semibold text-gray-500 mb-2">
            INTERFACE DESIGN
          </h3>
          <a
            href="#"
            className="text-blue-400 hover:text-pink-400 transition-colors text-[12px] font-medium"
          >
            Visit Betaflux Sigma Labs
          </a>
          <div className="mt-4">
            <img
              src="https://cdn.prod.website-files.com/64215e3ab4bdc4653000f139/644774db8b0411e9eebc0c05_Group%201000005025-p-2000.png"
              alt="Sigma Labs"
              className="w-32"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>©2023 Betaflux Consulting Pvt Ltd</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
