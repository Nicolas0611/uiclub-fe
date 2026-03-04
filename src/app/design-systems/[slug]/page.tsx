import { fetchDesignSystemsBySlug } from "@/actions/design-system/design-actions";
import ComponentsGrid from "@/components/custom/design-systems/ComponentsGrid/ComponentsGrid";
import ContainerLinks from "@/components/custom/design-systems/ContainerLinks/ContainerLinks";

import { Breadcrumb, EmptyState } from "@/components/shared";
import { Chip } from "@heroui/react";
import { notFound } from "next/navigation";

export default async function DesignDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const designSystem = await fetchDesignSystemsBySlug(slug, true);

  if (!designSystem) {
    notFound();
  }
  const isUpdated = designSystem?.isUpdated
    ? { text: "Updated", color: "success" as const }
    : { text: "Outdated", color: "danger" as const };

  return (
    <div className="container mx-auto px-4">
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-5">
          <Breadcrumb actualPage={designSystem?.company?.name} />
          <h2 className="text-3xl md:text-4xl">{designSystem?.name}</h2>
          <div className="flex gap-2">
            <Chip radius="sm" size="sm" variant="flat" color={isUpdated.color}>
              {isUpdated.text}
            </Chip>
            <Chip radius="sm" size="sm" variant="flat" color="success">
              Popularity: {designSystem?.popularity}
            </Chip>
          </div>
          <p className="text-neutral-500 text-sm w-full lg:w-[65%] md:text-medium">
            {designSystem?.largeDescription}
          </p>
          <ContainerLinks designSystem={designSystem} />
        </div>
        {designSystem?.components && designSystem?.components.length > 0 ? (
          <ComponentsGrid components={designSystem!.components} />
        ) : (
          <div className="py-10">
            <EmptyState
              title="We’re adding components soon."
              description="In the meantime, enjoy this beautiful emptiness."
              showLink={false}
            />
          </div>
        )}
      </section>
    </div>
  );
}
