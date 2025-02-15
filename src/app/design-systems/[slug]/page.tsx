import { Breadcrumb } from "@/components/shared";
import { fetchDesignSystemsById } from "@/design-systems/actions/design-actions";
import ComponentsGrid from "@/design-systems/components/ComponentsGrid/ComponentsGrid";
import {
  FolderOpenIcon,
  GlobeAmericasIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/solid";

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
  return (
    <div className="container mx-auto px-4">
      <section className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-5">
          <div className="flex gap-2">
            {/*   <Chip radius="sm" size="sm" variant="flat" color={isUpdated.color}>
              {isUpdated.text}
            </Chip>
            <Chip radius="sm" size="sm" variant="flat" color="success">
              Popularity: {designSystem?.popularity}
            </Chip> */}
            <Breadcrumb />
          </div>
          <h2 className="text-4xl">{designSystem?.name}</h2>
          <div className="flex items-center gap-5">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center gap-1 border-r-1 border-gray-400 border-solid pr-3"
              >
                <p className="font-medium text-sm">{spec.label}</p>
                <p className="font-medium text-sm text-neutral-500">
                  {spec?.value}
                </p>
              </div>
            ))}
          </div>
          <p className="text-neutral-500 w-[65%]">
            {designSystem?.large_description}
          </p>

          <div className="flex justify-between w-full border-1 border-solid border-gray-200 h-[12rem] rounded-2xl p-5 gap-8">
            <div className="w-full flex flex-col justify-between border-r-1 border-gray-200 border-solid">
              <div className="w-fit rounded-full border-1 border-solid border-gray-200 p-3 ">
                <FolderOpenIcon className="size-5 text-gray-400" />
              </div>
              <p>Storybook</p>
            </div>
            <div className="w-full flex flex-col justify-between border-r-1 border-gray-200 border-solid">
              <div className="w-fit rounded-full border-1 border-solid border-gray-200 p-3">
                <PaintBrushIcon className="size-5 text-gray-400" />
              </div>
              <p>Figma</p>
            </div>
            <div className="w-full flex flex-col justify-between">
              <div className="w-fit rounded-full border-1 border-solid border-gray-200 p-3">
                <GlobeAmericasIcon className="size-5 text-gray-400" />
              </div>
              <p>Website</p>
            </div>
          </div>
        </div>
        {designSystem?.components && (
          <ComponentsGrid components={designSystem?.components} />
        )}
      </section>
    </div>
  );
}
