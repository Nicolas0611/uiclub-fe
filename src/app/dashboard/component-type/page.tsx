import { fetchComponentList } from "@/actions/component/component-action";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Link } from "@heroui/react";

const ComponentTypePage = async () => {
  const componentTypes = await fetchComponentList();
  console.log(componentTypes);
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
      <h3>Component Table</h3>
    </div>
  );
};

export default ComponentTypePage;
