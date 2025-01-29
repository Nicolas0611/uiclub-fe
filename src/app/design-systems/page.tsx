import { Card } from "@/components/shared/Card/Card";
import { CardBody } from "@/design-systems/components/CardBody/CardBody";
import { DesignSystem } from "@/interfaces/design-system-interface";
import { https } from "@/lib/axios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Systems",
  description: "Design System Descripton for metadata",
};

//todo: replace with server actions?
const fetchDesignSystems = async (): Promise<DesignSystem[]> => {
  try {
    const response = await https.get<DesignSystem[]>(
      "design-libraries/design-systems/"
    );
    console.log(response.data);
    return response.status === 200 ? response.data : [];
  } catch {
    throw "Error fetching design systems:";
  }
};

async function DesignSystemsPage() {
  const designSystems = await fetchDesignSystems();
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col gap-5">
        <span className="text-base text-primary font-semibold">
          2024 · Design Systems and UI Libraries
        </span>
        <h2 className="text-4xl">List of the top 20 Benchmark Systems</h2>
        <p className="text-neutral-500 w-3/4">
          This is the list of the most popular Design Systems and UI libraries,
          used as the leading Systems Benchmarks by thousands of companies,
          startups, designers, and developers around the world. This list is the
          result of exhaustive research, which included a survey of hundreds of
          designers and developers working at leading companies, such as Google,
          Atlassian, Airbnb, and IBM, among others.
        </p>
      </div>
      <main className="grid grid-cols-3 sm:grid sm:grid-cols-1 gap-2 py-10">
        {designSystems.map((designSystem) => (
          <Card
            key={designSystem.id}
            title={designSystem.name}
            description={designSystem.description}
            url={designSystem.company_name}
            slot={<CardBody quantity={designSystem.quantity_components} />}
          />
        ))}
      </main>
    </section>
  );
}

export default DesignSystemsPage;
