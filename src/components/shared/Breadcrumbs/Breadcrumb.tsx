"use client";

import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

interface Props {
  actualPage?: string;
}

const Breadcrumb = ({ actualPage = "" }: Props) => {
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <Breadcrumbs radius="full" variant="solid">
        <BreadcrumbItem href="/design-systems">Design System</BreadcrumbItem>
        <BreadcrumbItem>{actualPage} </BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
