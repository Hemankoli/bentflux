import { Link } from "react-router-dom";import Title from "../shared/Title";

const tabs = [
  { id: 1, name: "Platforms, Cloud & DevOps", to: "devops-assessment-and-cloud-strategy" },
  { id: 2, name: "CI, CD and GitOps", to: "ci-cd-and-gitops" },
];

export default function Hero() {
  return (
    <section className="flex flex-col md:gap-24 px-10 lg:px-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="max-w-xl">
          <Title name={"HIGH-IMPACT DESIGN AND TECHNOLOGY CONSULTING"} />
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-10">
            Build a moat <br /> around your business.
          </h1>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
            {tabs.map((title, idx) => (
              <Link 
              to={`/platforms-cloud-and-devops/${title.to}`}
                key={idx}
                className="bg-transperent border-2 border border-secondary hover:text-accent text-primary rounded  p-6 w-full md:w-64 transition cursor-pointer"
              >
                <h3 className="text-lg font-semibold mb-2">{title.name}</h3>
                <p className="text-sm flex items-center space-x-2">
                  <span>Our Capabilities</span>
                  <span>→</span>
                </p>
              </Link>
            ))}
          </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 md:mt-0">
        <div className="space-y-4">
          <p>Our team of designers, software engineers, and cloud consultants collaborates closely with executive, tech, and non-tech teams to create high-performance applications, secure, scalable, and dependable cloud infrastructures, and applications that are loved by users.</p>
        </div>
        <h1 className="text-4xl max-w-[400px] md:text-5xl font-extrabold leading-tight mb-10 text-accent">
          Get expert guidance from sketch to scale.
        </h1>
      </div>
    </section>
  );
}
