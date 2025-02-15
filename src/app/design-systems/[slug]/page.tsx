import { Breadcrumb } from "@/components/shared";
import { fetchDesignSystemsById } from "@/design-systems/actions/design-actions";
import ComponentsGrid from "@/design-systems/components/ComponentsGrid/ComponentsGrid";
import ContainerLinks from "@/design-systems/components/ContainerLinks/ContainerLinks";
import {
  FolderOpenIcon,
  GlobeAmericasIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";
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
  const specs = [
    { label: "Company", value: designSystem?.company_name },
    { label: "Components", value: designSystem?.quantity_components },
  ];
  const detailLinks = [
    {
      title: "Storybook",
      icon: <FolderOpenIcon className="size-5 text-gray-400" />,
      link: "https://stackoverflow.com/questions/65953801/how-to-implement-the-last-child-using-tailwind",
    },
    {
      title: "Figma",
      icon: <PaintBrushIcon className="size-5 text-gray-400" />,
      link: "https://stackoverflow.com/questions/65953801/how-to-implement-the-last-child-using-tailwind",
    },
    {
      title: "Website",
      icon: <GlobeAmericasIcon className="size-5 text-gray-400" />,
      link: "https://stackoverflow.com/questions/65953801/how-to-implement-the-last-child-using-tailwind",
    },
  ];

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
          <ContainerLinks links={detailLinks} />
        </div>
        {designSystem?.components && (
          <ComponentsGrid components={designSystem?.components} />
        )}
      </section>
    </div>
  );
}
