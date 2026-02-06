import { fetchDesignSystems } from "@/actions/design-system/design-actions";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Link } from "@heroui/react";
import AdminGridCard from "./ui/AdminGridCard";

const DesignSystemPage = async () => {
  const designSystems = await fetchDesignSystems();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Button
          size="sm"
          color="primary"
          variant="solid"
          as={Link}
          href="/dashboard/design-systems/new"
        >
          <PlusIcon className="size-5" />
          Add Design System
        </Button>
      </div>
      <AdminGridCard designSystems={designSystems} />
    </div>
  );
};

export default DesignSystemPage;
