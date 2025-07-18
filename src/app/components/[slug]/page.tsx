import { fetchComponentTypeById } from "@/component/actions/component-action";
import StatCard from "@/component/components/StatCard/StatCard";
import { Breadcrumb } from "@/components/shared";
import Tabs from "@/components/shared/Tabs/Tabs";
import { Chip } from "@heroui/react";
import Image from "next/image";

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = await fetchComponentTypeById({ slug });
  const DESIGN_SYSTEM_TOTAL = 5;
  const componentStats = [
    {
      stat: component?.usage_count || 0,
      description: `Of the Top Systems name this component ${component?.name}.`,
    },
    {
      stat: (component!.design_systems_count * 100) / DESIGN_SYSTEM_TOTAL || 0,
      description:
        "of the Top 20 Systems include this component within their system.",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-5">
          <Breadcrumb actualPage={component?.name} />
          <h2 className="text-3xl md:text-4xl">{component?.name}</h2>
          <div className="flex gap-2">
            <Chip size="sm" color="success" variant="dot">
              type: {component?.category}
            </Chip>
          </div>
          <p className="text-neutral-500 text-sm pb-3 w-full lg:w-[65%] md:text-medium">
            {component?.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-9">
          <Image
            alt={`${component!.name}_img`}
            className="w-full object-cover h-[140px]"
            src={`/assets/${component!.name}.png`}
            width={1000}
            height={1000}
            quality={100}
            style={{ height: "100%" }}
            loading="lazy"
          />
          {componentStats.map((component, index) => (
            <StatCard
              key={`card_${index}`}
              stat={component.stat}
              description={component.description}
            />
          ))}
        </div>
        <div className="pt-5 w-100">
          <Tabs items={component?.figma_links || []} />
        </div>
      </section>
    </div>
  );
}
