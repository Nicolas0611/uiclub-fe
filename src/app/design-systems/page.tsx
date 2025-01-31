import { fetchDesignSystems } from "@/design-systems/actions/design-actions";
import { DesignSystemGrid } from "@/design-systems/components/DesignSystemGrid/DesignSystemGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Systems",
  description: "Design System Descripton for metadata",
};

async function DesignSystemsPage() {
  const content = {
    preTitle: "2024 · Design Systems and UI Libraries",
    title: "List of the top 20 Benchmark Systems",
    parragraph:
      " This is the list of the most popular Design Systems and UI libraries, used as the leading Systems Benchmarks by thousands of companies, startups, designers, and developers around the world. This list is the result of exhaustive research, which included a survey of hundreds of designers and developers working at leading companies, such as Google, Atlassian, Airbnb, and IBM, among others.",
  };
  const designSystems = await fetchDesignSystems();
  //TODO: CREATE LAYOUT COMPONENT AND FIX GRADIENT
  return (
    <div className="relative">
      <div className="z-10 absolute -right-60 h-60 w-[36rem] transform-gpu md:bg-[linear-gradient(115deg,var(--tw-gradient-stops))] from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] rotate-[-10deg] rounded-full blur-3xl "></div>
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-5">
          <span className="text-base text-primary font-semibold">
            {content.preTitle}
          </span>
          <h2 className="text-4xl">{content.title}</h2>
          <p className="text-neutral-500 w-[65%]">{content.parragraph}</p>
        </div>
        <DesignSystemGrid designSystems={designSystems} />
      </section>
    </div>
  );
}

export default DesignSystemsPage;
