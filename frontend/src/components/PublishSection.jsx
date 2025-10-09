import PrimaryButton from "../shared/PrimaryButton";

export default function PublishSection() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-4 md:px-10">
      <div className="flex items-start md:flex-row flex-col md:gap-32">
        <div className="space-y-4">
          <p className="text-[12px] w-[250px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">RECENT PUBLICATION • WHITEPAPER</p>
          <h1 className="text-4xl max-w-[600px] md:text-5xl font-extrabold leading-tight mb-10">
            Gitops for engineering leaders and cloud infrastructure teams
          </h1>
          <PrimaryButton name={"Download Now"} />
        </div>
        <div className="w-60 h-60">
          <img src="https://cdn.prod.website-files.com/64215e3ab4bdc4653000f139/642d73b0e8fdf9c43943b42a_A4%20-%201%20(1)%202-p-500.png" />
        </div>
      </div>
    </section>
  );
}