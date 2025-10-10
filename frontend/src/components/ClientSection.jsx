import PrimaryButton from "../shared/PrimaryButton";
import Title from "../shared/Title";

export default function ClientSection() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-4 md:px-10">
      <div className="flex md:items-center md:flex-row flex-col md:gap-32">
        <div>
        <Title name={"HIGH-IMPACT DESIGN AND TECHNOLOGY CONSULTING"} />
        <h1 className="text-2xl max-w-[600px] md:text-3xl font-extrabold leading-tight mb-10">
          Does your organization place a high premium on enhancing engineering effectiveness?
        </h1>
        </div>
         <PrimaryButton name={"Request a consultation with us"} />
      </div>
    </section>
  );
}
