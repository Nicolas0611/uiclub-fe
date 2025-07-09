import { fetchComponentList } from "@/component/actions/component-action";
import ComponentsGrid from "@/design-systems/components/ComponentsGrid/ComponentsGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components List",
  description:
    "A comprehensive repository of various design systems, UI frameworks, and component libraries. Compare and explore industry-leading design guidelines.",
};

async function ComponentsPage() {
  const content = {
    preTitle: "Components",
    title: "List of Components",
    parragraph:
      "We have compiled all the wisdom and best practices from the top 20 Design Systems and UI libraries in one place. We will continue to add more components week after week.",
  };
  const components = await fetchComponentList();
  console.log({ components });

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
      <ComponentsGrid components={components} />
    </section>
  );
}

export default ComponentsPage;
