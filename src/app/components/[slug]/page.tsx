import {
  fetchComponentTypeById,
  fetchRelatedCategories,
} from "@/actions/component/component-action";
import BrandsMapper from "@/components/custom/component-page/BrandsMapper/BrandsMapper";
import Splitter from "@/components/custom/component-page/Splitter/Splitter";
import DesignSystemCard from "@/components/custom/component-page/StatCard/DesignSystemCard";
import StatCard from "@/components/custom/component-page/StatCard/StatCard";
import ComponentsGrid from "@/components/custom/design-systems/ComponentsGrid/ComponentsGrid";

import { Breadcrumb } from "@/components/shared";
import { Chip } from "@heroui/react";
import Image from "next/image";

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = await fetchComponentTypeById({ slug });

  const componentTypes = await fetchRelatedCategories({
    type: component!.type,
  });

  const DESIGN_SYSTEM_TOTAL = 6;

  const componentStats = [
    {
      stat: component?.usageCount || 0,
      description: `Of the Top Systems name this component ${component?.name}.`,
    },
    {
      stat: (component!.designSystemCount * 100) / DESIGN_SYSTEM_TOTAL || 0,
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
              type: {component?.type}
            </Chip>
          </div>
          <p className="text-neutral-500 text-sm pb-3 w-full lg:w-[65%] md:text-medium">
            {component?.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-9">
          <Image
            alt={
              `${component!.name}_img` ||
              component!.name.toLowerCase().replaceAll(" ", "")
            }
            className="w-full object-cover h-[140px]"
            src={`/assets/${component!.name}.png`}
            width={1000}
            height={1000}
            quality={100}
            style={{ height: "100%" }}
            loading="lazy"
          />
          {componentStats.map(({ stat, description }, index) => (
            <StatCard
              key={`card_${index}`}
              stat={`${Math.round(stat)}%`}
              description={description}
              brands={component?.relatedDesignSystems}
            />
          ))}
          <DesignSystemCard
            className="lg:col-span-2"
            title="Related Design Systems"
            designSystems={component?.relatedDesignSystems}
          />
          <StatCard
            stat={`${component?.designSystemCount} Top Design Systems` || "0"}
            description="Include this component"
            isInverted
          />
        </div>
        <div className="relative rounded-xl overflow-hidden border border-gray-200 mt-10 ">
          <Image
            src={`/blueprints/${component?.name}Blueprint.png`}
            alt="logo"
            style={{ height: "100%", width: "100%" }}
            width={1000}
            height={2000}
            quality={100}
          />
          <div className="flex flex-row items-center gap-2 absolute top-5 left-5 bg-white border border-gray-200 p-3 rounded-full">
            <p className="text-gray-800 text-base sm:text-sm">
              Highlighted by:
            </p>
            <BrandsMapper brands={component?.relatedDesignSystems} />
          </div>
        </div>

        <div className="pt-5">
          <Splitter component={component!} />
        </div>

        <div className="mt-5 border border-gray-200 rounded-lg shadow-sm p-4">
          <div>
            <small className="text-gray-600">Family</small>
            <h3 className="text-lg"> {component?.type}</h3>
          </div>
          <ComponentsGrid components={componentTypes!} isWebsiteHref={false} />
        </div>
      </section>
    </div>
  );
}
