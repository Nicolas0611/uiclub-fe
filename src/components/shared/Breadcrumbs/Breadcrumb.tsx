"use client";

import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

const Breadcrumb = () => {
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <Breadcrumbs radius="full" variant="solid">
        <BreadcrumbItem>Design System</BreadcrumbItem>
        <BreadcrumbItem>MUI</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
