import React from 'react'
import ClientSection from '../components/ClientSection'
import { useParams } from 'react-router-dom';
import { aboutData } from '../assets/aboutData';
import PrimaryButton from '../shared/PrimaryButton';

export default function About() {
     const { pathId } = useParams();
    const data = aboutData?.find((item) => item.path === pathId);
    return (
        <div>
            <div className="border-b border-gray-700">
                <section className="max-w-6xl mx-auto text-center px-6 md:px-10 py-20">
                    <div className='flex flex-col items-center'>
                        <p className="text-[12px] uppercase bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent font-bold mb-3">
                            {data?.subHeading}
                        </p>
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white mb-6"
                            dangerouslySetInnerHTML={{ __html: data?.heading }}>
                        </h1>
                        <p className="text-gray-400 mb-8">
                            {data.headingParagraph}
                        </p>
                        <PrimaryButton name="Request consultation" />
                    </div>
                </section>
            </div>
            <div className="border-b border-gray-700">
                <ClientSection />
            </div>
        </div>
    )
}
