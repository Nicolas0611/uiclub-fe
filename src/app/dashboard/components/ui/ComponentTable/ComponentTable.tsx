"use client";

import { usePagination } from "@/hooks/usePagination";
import { statusColorMap } from "@/constants";
import type { Component } from "@/interfaces/design-system-interface";
import { PencilIcon } from "@heroicons/react/24/outline";
import {
  Chip,
  Link,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@heroui/react";
import { useCallback } from "react";

interface IComponentTable {
  components: Component[];
  totalPages: number;
}

export const columns = [
  { name: "Component", uid: "component" },
  { name: "Status", uid: "status" },
  { name: "Type", uid: "type" },
  { name: "Company", uid: "company" },
  { name: "Design System", uid: "designSystem" },
  { name: "Website", uid: "website" },
  { name: "Actions", uid: "actions" },
];

export const ComponentTable = ({ components, totalPages }: IComponentTable) => {
  const { currentPage, router, createPageUrl } = usePagination(totalPages);

  const renderCell = useCallback(
    (component: Component, columnKey: React.Key) => {
      switch (columnKey) {
        case "component":
          return (
            <User
              name={component.name}
              avatarProps={{
                radius: "lg",
                src: component?.componentImage?.url || "",
              }}
            >
              {component.name}
            </User>
          );
        case "company":
          return (
            <p className="text-bold text-sm capitalize">
              {component?.designSystem?.company?.name}
            </p>
          );
        case "designSystem":
          return (
            <div className="flex flex-col">
              {component?.designSystem?.name ? (
                <p className="text-bold text-sm capitalize">
                  {component?.designSystem?.name}
                </p>
              ) : (
                <Chip
                  className="capitalize"
                  color="warning"
                  size="sm"
                  variant="flat"
                >
                  No associated DS
                </Chip>
              )}
            </div>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[component.state ? "active" : "paused"]}
              size="sm"
              variant="flat"
            >
              {component.state ? "Active" : "Inactive"}
            </Chip>
          );
        case "website":
          return (
            <Link isExternal href={component.link} size="sm">
              Link
            </Link>
          );
        case "type":
          return (
            <Chip size="sm" color="success" variant="dot">
              {component?.type}
            </Chip>
          );
        case "actions":
          return (
            <div className="flex items-center gap-2 justify-center">
              <Tooltip content="Edit">
                <Link href={`/dashboard/components/${component.id}/`}>
                  <PencilIcon className="size-5 text-default-400" />
                </Link>
              </Tooltip>
            </div>
          );
      }
    },
    [],
  );
  return (
    <Table
      aria-label="Components Table"
      shadow="none"
      className="border border-gray-200 rounded-lg"
      bottomContent={
        <div className="flex w-full justify-end">
          <Pagination
            isCompact
            showControls
            showShadow
            page={currentPage}
            color="primary"
            total={totalPages}
            onChange={(page) => router.push(createPageUrl(page))}
          />
        </div>
      }
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
      </TableHeader>
      <TableBody items={components}>
        {(component) => (
          <TableRow key={component.id}>
            {(columnKey) => (
              <TableCell key={columnKey}>
                {renderCell(component, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
