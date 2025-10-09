import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryButton from "../shared/PrimaryButton";

const tabs = [
  { id: 1, name: "Platforms, Cloud & DevOps" },
  { id: 2, name: "Product Engineering" },
  { id: 3, name: "Interface Design" },
  { id: 4, name: "Tech Strategy & Transformation" },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(1);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sectionRefs.current.map((ref) => {
        if (!ref) return { id: null, offset: Infinity };
        const rect = ref.getBoundingClientRect();
        return { id: ref.dataset.id, offset: Math.abs(rect.top) };
      });
      const visible = offsets.reduce((prev, curr) =>
        curr.offset < prev.offset ? curr : prev
      );
      if (visible.id && Number(visible.id) !== activeTab) {
        setActiveTab(Number(visible.id));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10">
      {/* Tabs */}
      <div className="flex flex-wrap gap-8 mb-10 sticky top-0 bg-black z-40 py-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id);
              sectionRefs.current[tab.id - 1]?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className={`pb-3 text-base md:text-lg font-medium transition-all relative ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.name}
            <motion.div
              layoutId="underline"
              className={`absolute left-0 right-0 bottom-0 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 ${
                activeTab === tab.id ? "opacity-100  h-[2px]" : "opacity-0"
              }`}
              transition={{ duration: 0.4 }}
            />
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          {tabs.map((tab) => (
            <div
              key={tab.id}
              ref={(el) => (sectionRefs.current[tab.id - 1] = el)}
              data-id={tab.id}
              className="mb-20 scroll-mt-24"
            >
              <p className="text-[12px] uppercase w-24 bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text font-bold">
                What We Do
              </p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
              >
                {tab.name}
              </motion.h1>

              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 text-gray-400 leading-relaxed"
                >
                  {tab.id === 1 && (
                    <>
                      <p>
                        Our platform and cloud engineering team has deep
                        expertise around AWS, GCP and Azure clouds – designing
                        and implementing effective GitOps, CI/CD, Kubernetes,
                        DevSecOps and observability strategies.
                      </p>
                      <p>
                        From helping enterprise engineering leaders streamline
                        their release process, security, and compliance to
                        helping small tech teams establish a cost-effective,
                        secure, and scalable cloud strategy – our team brings
                        over 16 years of experience designing reliable
                        infrastructure.
                      </p>
                    </>
                  )}

                  {tab.id === 2 && (
                    <p>
                      We build high-performance mobile and web applications –
                      designed on a microservices-based or event-driven
                      architecture, modular and cloud-native.
                    </p>
                  )}

                  {tab.id === 3 && (
                    <p>
                      Our design studio, Betaflux Sigma Labs, specializes in
                      digital product strategy and design. We build user-centric
                      solutions for enterprises, startups, and Gen-Z users alike.
                    </p>
                  )}

                  {tab.id === 4 && (
                    <p>
                      We help define & implement a technology roadmap that keeps
                      your business ahead of the competition.
                    </p>
                  )}

                  <PrimaryButton name={"Learn more about this service"} />
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end sticky top-40 h-[400px]"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none rounded-full"></div>
            <img
              src="https://cdn.prod.website-files.com/643e9b07e622e9a64803e5b1/645a56c21a61ef871b8b9b5d_How%20A%20Multi-Cloud%20Strategy%20Diversifies%20Risk.jpg"
              alt="Betaflux Sigma"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
