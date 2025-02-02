import { fetchDesignSystemsById } from "@/design-systems/actions/design-actions";
import { Chip } from "@heroui/react";

export default async function DesignDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const designSystem = await fetchDesignSystemsById({ id: params.id });
  const isUpdated = designSystem?.is_updated
    ? { text: "Updated", color: "success" as const }
    : { text: "Outdated", color: "danger" as const };
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <Chip radius="sm" size="sm" variant="flat" color={isUpdated.color}>
              {isUpdated.text}
            </Chip>
            <Chip radius="sm" size="sm" variant="flat" color="success">
              Popularity: {designSystem?.popularity}
            </Chip>
          </div>

          <h2 className="text-4xl">{designSystem?.name}</h2>
          <p className="text-neutral-500 w-[65%]">
            {designSystem?.description}
          </p>
        </div>
      </section>
    </div>
  );
}
