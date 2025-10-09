import PrimaryButton from "../shared/PrimaryButton";

export default function ClientSection() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-4 md:px-10">
      <div className="flex md:items-center md:flex-row flex-col md:gap-32">
        <h1 className="text-2xl max-w-[600px] md:text-3xl font-extrabold leading-tight mb-10">
          Is driving engineering effectiveness a priority at your organisation?
        </h1>
         <PrimaryButton name={"Request a consultation with us"} />
      </div>
    </section>
  );
}
