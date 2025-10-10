import React, { useState } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "../shared/PrimaryButton";
import { FaRocket } from "react-icons/fa";
import CloudServices from "../shared/CloudServices";
import { serviceData } from "../assets/serviceData";
import { useParams } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import ClientSection from "../components/ClientSection";

export default function ServicesPage() {
    const { pathId } = useParams();
    const data = serviceData?.find((item) => item.path === pathId);
    const [indexes, setIndexes] = useState(1)

    function showSection(index) {
        if (indexes === index) setIndexes(null)
        else setIndexes(index);
    }

    return (
        <div>
            <div className="border-b border-gray-700">
                <section className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto px-6 md:px-10 py-20">
                    <div>
                        <p className="text-[12px] uppercase bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-bold mb-3">
                            {data?.subHeading}
                        </p>
                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white mb-6"
                            dangerouslySetInnerHTML={{ __html: data?.Heading }}>
                        </h1>
                        <p className="text-gray-400 mb-8">
                            {data.headingParagraph}
                        </p>
                        <PrimaryButton name="Request consultation" />
                    </div>
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        src={data.headingImage}
                        alt={data.headingImageAlt}
                        className="max-w-[300px] max-h-[400px] md:max-w-[500px] md:max-h-[600px]"
                    />
                </section>
            </div>

            <div className="border-b border-gray-700">
                <section className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto px-6 md:px-10 py-20">
                    <div className="text-left w-[80%]">
                        <p className="text-[12px] uppercase bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-bold mb-3">
                            {data.workSubHeading}
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            {data.workHeading}
                        </h2>
                        <p className="text-gray-400 mb-8">
                            {data.workParagraph}
                        </p>
                        <motion.div
                            className="flex justify-center mt-12"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                        >
                            <FaRocket className="text-[200px] md:text-[300px] text-pink-500" />
                        </motion.div>
                    </div>
                    <div className="space-y-8">
                        {data?.workSteps?.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <h3 className="text-2xl font-bold">{index + 1}. {step.title}</h3>
                                <p className="text-gray-400">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>

            <div className="border-b border-gray-700">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 md:px-10 py-20">
                    <div className="md:w-[80%]">
                        <p className="text-[12px] uppercase bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-bold mb-3">
                            {data.finalSubHeading}
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
                            dangerouslySetInnerHTML={{ __html: data.finalHeading }}>
                        </h2>
                        <p className="text-gray-400 mb-8">
                            {data.finalParagraph}
                        </p>
                        <img className="max-w-[300px] max-h-[400px] md:max-w-[350px] md:max-h-[600px]"
                            src={data.finalImage}
                        />
                    </div>
                    <div className="space-y-10">
                        <div className="grid md:grid-cols-2 gap-4">
                            {data.finalSteps.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <h4 className="text-2xl font-bold">
                                        {i + 1}. {item.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                        <PrimaryButton name="Request consultation" />
                    </div>
                </section>
            </div>

            <div className="border-b border-gray-700">
                <CloudServices />
            </div>

            <div className="border-b border-gray-700">
                <section className="flex items-start md:flex-row flex-col gap-20 max-w-6xl mx-auto px-6 md:px-10 py-20">
                    <div className="md:-[40%]">
                        <p className="text-[12px] uppercase bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-bold mb-3">
                            {data.questionSubHeading}
                        </p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            {data.questionHeading}
                        </h2>
                    </div>
                    <div className="md:w-[70%] space-y-6">
                        {data.questions.map((item, i) => (
                            <motion.div
                                key={i}
                                className="space-y-8"
                            >
                                <div className="flex flex-col gap-2 border-b border-borderColor pt-2 pb-4">
                                    <button onClick={() => showSection(item.title)} className="flex items-center justify-between">
                                        <div className="text-lg text-start font-extrabold">{item?.title}</div>
                                        <IoIosArrowUp className={`w-5 h-5 ${indexes === item.title ? "" : "rotate-180"}`} />
                                    </button>
                                    <motion.div initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className={`flex flex-col gap-2 text-[16px] text-gray-400 ${indexes === item.title ? "flex" : "hidden"}`}>
                                        {item.desc}
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
            <div className="border-b border-gray-700">
                <ClientSection />
            </div>
        </div>
    );
}
