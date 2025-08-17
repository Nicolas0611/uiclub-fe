"use client";

import Tabs from "@/components/shared/Tabs/Tabs";
import { ComponentType } from "@/interfaces/design-system-interface";
import { ViewColumnsIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import { useState } from "react";

const Splitter = ({ component }: { component: ComponentType }) => {
  const [compare, setCompare] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm p-4">
      <div className="w-full flex justify-end mb-4">
        <Button
          color="primary"
          variant="light"
          onPress={() => setCompare(!compare)}
          startContent={<ViewColumnsIcon className="size-5" />}
        >
          {compare ? `Hide Comparison` : `Compare`}
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Tabs items={component?.figma_links || []} placement="start" />
        </div>

        {compare && (
          <div className="flex-1">
            <Tabs items={component?.figma_links || []} placement="end" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Splitter;
