import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryButton from "../shared/PrimaryButton";
import Title from "../shared/Title";

const tabs = [
  { id: 1, name: "Platforms, Cloud & DevOps" },
  { id: 2, name: "Product Engineering" },
  { id: 3, name: "Interface Design" },
  { id: 4, name: "Tech Strategy & Transformation" },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-10">
      {/* Tabs */}
      <div className="flex flex-wrap gap-8 mb-10 py-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 text-base md:text-lg font-medium transition-all relative ${
              activeTab === tab.id
                ? "text-accent"
                : "text-primary hover:text-accent"
            }`}
          >
            {tab.name}
            <motion.div
              className={`absolute left-0 right-0 bottom-0 rounded-full ${
                activeTab === tab.id ? "opacity-100 border border-secondary" : "opacity-0"
              }`}
              transition={{ duration: 0.4 }}
            />
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <AnimatePresence mode="wait">
            {tabs.map(
              (tab) =>
                tab.id === activeTab && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="mb-20 space-y-4"
                  >
        
                    <Title name={"What We Do"} />

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
                    >
                      {tab.name}
                    </motion.h1>

                    <div className="space-y-4 text-gray-400 leading-relaxed">
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
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end sticky top-40 h-[400px]"
        >
          <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none rounded-full"></div>
            <img
              src="https://www.cloud-kinetics.com/wp-content/uploads/2019/05/A-DevOps-Approach-To-Cloud-Governance-1.jpg"
              alt="Betaflux Sigma"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
