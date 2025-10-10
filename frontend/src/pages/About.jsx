import React from 'react'
import ClientSection from '../components/ClientSection'
import { useParams } from 'react-router-dom';
import { aboutData } from '../assets/aboutData';
import PrimaryButton from '../shared/PrimaryButton';
import Title from '../shared/Title';

export default function About() {
     const { pathId } = useParams();
    const data = aboutData?.find((item) => item.path === pathId);
    return (
        <div>
            <div className="border-b border-secondary">
                <section className="max-w-6xl mx-auto text-center px-6 md:px-10 py-20">
                    <div className='flex flex-col items-center'>
                        <Title name={data?.subHeading} /> 
                        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-accent mb-6"
                            dangerouslySetInnerHTML={{ __html: data?.heading }}>
                        </h1>
                        <p className="text-secondary mb-8">
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
