import ClientSection from "../components/ClientSection";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";

export default function HomePage() {
    return (
        <main className="flex-grow">
            <div className="border-b border-secondary">
                <Hero />
            </div>
            <div className="border-b border-secondary">
                <ServicesSection />
            </div>
            <div className="border-b border-secondary">
                <ClientSection />
            </div>
        </main>
    );
}
