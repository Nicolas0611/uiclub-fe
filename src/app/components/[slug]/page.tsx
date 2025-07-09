import { Breadcrumb } from "@/components/shared";
import { fetchComponentTypeById } from "@/design-systems/actions/design-actions";
import { Chip } from "@heroui/react";

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = await fetchComponentTypeById({ slug });

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
          <p className="text-neutral-500 text-sm w-full lg:w-[65%] md:text-medium">
            {component?.description}
          </p>
        </div>
      </section>
    </div>
  );
}
