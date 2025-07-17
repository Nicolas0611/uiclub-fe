import { fetchComponentTypeById } from "@/component/actions/component-action";
import StatCard from "@/component/components/StatCard/StatCard";
import { Breadcrumb } from "@/components/shared";
import Tabs from "@/components/shared/Tabs/Tabs";
import { Chip } from "@heroui/react";

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = await fetchComponentTypeById({ slug });
  console.log(component);
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
          <StatCard
            stat={component?.usage_count || 0}
            description="Of the Top Systems name this component Spinner."
          />
          <StatCard
            stat={30}
            description="Of the Top 20 Systems include this component within their system."
          />
        </div>
        <div className="pt-5">
          <Tabs items={component?.figma_links || []} />
        </div>
      </section>
    </div>
  );
}
