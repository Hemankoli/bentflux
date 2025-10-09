import ClientSection from "../components/ClientSection";
import Hero from "../components/Hero";
import PublishSection from "../components/PublishSection";
import ServicesSection from "../components/ServicesSection";

export default function HomePage() {
    return (
        <main className="flex-grow">
            <div className="border-b border-gray-700">
                <Hero />
            </div>
            <div className="border-b border-gray-700">
                <ServicesSection />
            </div>
            <div className="border-b border-gray-700">
                <PublishSection />
            </div>
            <div className="border-b border-gray-700">
                <ClientSection />
            </div>
        </main>
    );
}
