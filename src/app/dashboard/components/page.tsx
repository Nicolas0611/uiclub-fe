import { getComponents } from "@/actions/component/get-components";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Link } from "@heroui/react";
import { ComponentTable } from "./ui/ComponentTable/ComponentTable";

interface IComponentsPage {
  searchParams: Promise<{ page: number; take: number }>;
}
const ComponentsPage = async ({ searchParams }: IComponentsPage) => {
  const { page } = await searchParams;

  const { components, ok, message, totalPages } = await getComponents({ page });

  if (!ok) return <p>{message}</p>;
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex items-center justify-end">
        <Button
          size="sm"
          color="primary"
          variant="solid"
          as={Link}
          href="/dashboard/components/new"
        >
          <PlusIcon className="size-5" />
          Add Component
        </Button>
      </div>
      <ComponentTable components={components} totalPages={totalPages} />
    </div>
  );
};

export default ComponentsPage;
