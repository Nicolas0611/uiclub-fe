import { getFigma } from "@/actions/figma/get-figma";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Link } from "@heroui/react";
import FigmaTable from "./ui/FigmaTable";

const FigmaPage = async () => {
  const { data } = await getFigma();

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
          Add Figma
        </Button>
      </div>
      <FigmaTable figmaLinks={data} />
    </div>
  );
};

export default FigmaPage;
