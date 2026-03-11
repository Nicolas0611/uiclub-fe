import { fetchComponentList } from "@/actions/component/component-action";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Link } from "@heroui/react";
import { ComponentTypeTable } from "./ui/ComponentTypeTable";

interface IComponentTypePage {
  searchParams: Promise<{ page: number; search: string }>;
}
const ComponentTypePage = async ({ searchParams }: IComponentTypePage) => {
  const { page, search } = await searchParams;
  const urlPage = page ? page : 1;
  const { components, totalPages } = await fetchComponentList({
    page: urlPage,
    take: 10,
    search,
  });

  if (!components) {
    return <div>No component types found</div>;
  }
  return (
    <div className="flex flex-col h-full gap-3">
      <div className="w-full flex items-center justify-end">
        <Button
          size="sm"
          color="primary"
          variant="solid"
          as={Link}
          href="/dashboard/component-type/new"
        >
          <PlusIcon className="size-5" />
          Add Component Type
        </Button>
      </div>
      <ComponentTypeTable componentTypes={components} totalPages={totalPages} />
    </div>
  );
};

export default ComponentTypePage;
