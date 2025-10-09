import React from "react";
import { FaConnectdevelop } from "react-icons/fa";
import PrimaryButton from "../shared/PrimaryButton";


export default function Hero() {
  return (
    <section className="flex flex-col md:gap-24 px-10 lg:px-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="max-w-xl">
          <div className="mb-6">
            <span className="border border-gray-800 px-4 py-1 rounded-full text-[10px] md:text-[12px] bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text font-semibold">
              HIGH-IMPACT DESIGN AND TECHNOLOGY CONSULTING
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-10">
            Build a moat <br /> around your business.
          </h1>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
            {[
              "Interface Design",
              "Platforms, Cloud & DevOps",
            ].map((title, idx) => (
              <div
                key={idx}
                className="bg-[#1A1A1A] border-2 border-[#1A1A1A] hover:border-gray-800 rounded  p-6 w-full md:w-64 transition"
              >
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-400 text-sm flex items-center space-x-2 cursor-pointer hover:text-white">
                  <span>Our Capabilities</span>
                  <span>→</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="animate-spin-slow flex items-center justify-center mt-16 lg:mt-0">
          <FaConnectdevelop className="text-pink-500 text-[200px] md:text-[300px] lg:text-[400px]" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-0">
        <h1 className="text-4xl max-w-[400px] md:text-5xl font-extrabold leading-tight mb-10 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
          Get expert guidance from sketch to scale.
        </h1>
        <div className="space-y-4">
          <p>Our team of designers, software engineers and cloud consultants work closely with executive, tech and non-tech teams to design applications that are functional and loved by users – develop high performance applications – and architect cloud infrastructures that support mission-critical systems to be secure, scalable and reliable.</p>
          <PrimaryButton name={"Learn more about Betaflux"} />
        </div>
      </div>
    </section>
  );
}
