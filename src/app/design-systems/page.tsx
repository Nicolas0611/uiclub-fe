import { DesignSystem } from "@/interfaces/design-system-interface";
import { https } from "@/lib/axios";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@heroui/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Systems",
  description: "Design System Descripton for metadata",
};
const fetchDesignSystems = async (): Promise<DesignSystem[]> => {
  try {
    const response = await https.get<DesignSystem[]>(
      "design-libraries/design-systems/"
    );
    console.log(response.data);
    return response.status === 200 ? response.data : [];
  } catch (error) {
    console.error("Error fetching design systems:", error);
    return [];
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
      <main className="grid grid-cols-3 gap-2 py-10">
        {designSystems.map((designSystem) => (
          <Card key={designSystem.id} shadow="sm" className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <Image
                alt="heroui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">HeroUI</p>
                <p className="text-small text-default-500">heroui.com</p>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              <p className="text-sm">
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/heroui-inc/heroui"
              >
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        ))}
      </main>
    </section>
  );
}

export default DesignSystemsPage;
