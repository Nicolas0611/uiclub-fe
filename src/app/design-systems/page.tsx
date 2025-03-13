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
    preTitle: "2024 · Design Systems and UI Libraries",
    title: "List of the top 20 Benchmark Systems",
    parragraph:
      "This is the list of the most popular Design Systems and UI libraries, used as the leading Systems Benchmarks by thousands of companies, startups, designers, and developers around the world. This list is the result of exhaustive research, which included a survey of hundreds of designers and developers working at leading companies, such as Google, Atlassian, Airbnb, and IBM, among others.",
  };

  const designSystems = await fetchDesignSystems(search);
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col gap-5">
        <span className="text-base text-primary font-semibold">
          {content.preTitle}
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight">
          {content.title}
        </h2>
        <p className="text-neutral-500 sm:w-full md:w-[75%] lg:w-[65%] ">
          {content.parragraph}
        </p>
      </div>
      <DesignSystemGrid designSystems={designSystems} />
    </section>
  );
}

export default DesignSystemsPage;
