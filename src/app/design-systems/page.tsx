import { fetchDesignSystems } from "@/design-systems/actions/design-actions";
import { DesignSystemGrid } from "@/design-systems/components/DesignSystemGrid/DesignSystemGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Systems",
  description:
    "A comprehensive repository of various design systems, UI frameworks, and component libraries. Compare and explore industry-leading design guidelines.",
};

async function DesignSystemsPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) {
  const { search } = await searchParams;

  const content = {
    preTitle: "2025 · Design Systems and UI Libraries",
    title: "List of the top Benchmark Systems",
    parragraph:
      "This list highlights the most popular Design Systems and UI libraries, serving as key benchmarks for thousands of companies, startups, designers, and developers worldwide. It is the result of extensive research, including a survey of hundreds of professionals from leading organizations like Google, Atlassian, Airbnb, and IBM.",
  };

  const designSystems = await fetchDesignSystems(search);
  return (
    <section className="container mx-auto px-4 py-10 ">
      <div className="flex flex-col gap-5">
        <span className="text-base text-primary font-semibold">
          {content.preTitle}
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
          {content.title}
        </h2>
        <p className="text-neutral-500 text-sm w-full md:w-[75%] md:text-medium lg:w-[65%] ">
          {content.parragraph}
        </p>
      </div>
      <DesignSystemGrid designSystems={designSystems} />
    </section>
  );
}

export default DesignSystemsPage;
