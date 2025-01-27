import { https } from "@/lib/axios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Systems",
  description: "Design System Descripton for metadata",
};
const fetchDesignSystems = async () => {
  try {
    const response = await https.get("design-libraries/design-systems/");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching design systems:", error);
    console.log(error);
  }
};

async function DesignSystemsPage() {
  await fetchDesignSystems();
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
      <main>components here</main>
    </section>
  );
}

export default DesignSystemsPage;
