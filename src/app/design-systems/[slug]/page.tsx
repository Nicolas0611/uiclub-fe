import { Breadcrumb } from "@/components/shared";
import { fetchDesignSystemsById } from "@/design-systems/actions/design-actions";
import ComponentsGrid from "@/design-systems/components/ComponentsGrid/ComponentsGrid";
import ContainerLinks from "@/design-systems/components/ContainerLinks/ContainerLinks";
import { Chip } from "@heroui/react";

export default async function DesignDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const designSystem = await fetchDesignSystemsById({ slug });
  const isUpdated = designSystem?.is_updated
    ? { text: "Updated", color: "success" as const }
    : { text: "Outdated", color: "danger" as const };

  return (
    <div className="container mx-auto px-4">
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-5">
          <Breadcrumb />
          <h2 className="text-4xl">{designSystem?.name}</h2>
          <div className="flex gap-2">
            <Chip radius="sm" size="sm" variant="flat" color={isUpdated.color}>
              {isUpdated.text}
            </Chip>
            <Chip radius="sm" size="sm" variant="flat" color="success">
              Popularity: {designSystem?.popularity}
            </Chip>
          </div>
          <p className="text-neutral-500 w-[65%]">
            {designSystem?.large_description}
          </p>
          <ContainerLinks designSystem={designSystem} />
        </div>
        {designSystem?.components && (
          <ComponentsGrid components={designSystem?.components} />
        )}
      </section>
    </div>
  );
}
