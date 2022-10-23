import { Heading } from "./design/Heading";

export function LandingSection() {
  return (
    <section className="w-full flex items-center justify-center h-[750px]  border-b-8 border-black bg-banner bg-cover bg-no-repeat">
      <div className="flex flex-col gap-8">
        <div className=" bg-secondary flex flex-col items-center p-11 shadow-xl shadow-black">
          <Heading size="lg" className="text-contrast leading-10 mb-4">
            Thiago Calazans
          </Heading>
          <Heading className="leading-8">Front-End Developer</Heading>
        </div>
        <div className="flex gap-4">
          <button className="w-full bg-primary h-14 shadow-xl shadow-black hover:bg-primary-hover transition-all">
            Download CV
          </button>
          <button className="w-full bg-primary h-14 shadow-xl shadow-black hover:bg-primary-hover transition-all">
            Social
          </button>
        </div>
      </div>
    </section>
  );
}
