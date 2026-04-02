"use client";

import { usePagination } from "@/hooks/usePagination";
import { statusColorMap } from "@/constants";
import { ComponentType } from "@/interfaces/design-system-interface";
import { PencilIcon } from "@heroicons/react/24/outline";
import {
  Chip,
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
import Link from "next/link";
import { useCallback } from "react";

export const columns = [
  { name: "Component", uid: "component" },
  { name: "Link Visibility", uid: "link" },
  { name: "Status", uid: "status" },
  { name: "Type", uid: "type" },
  { name: "Usage Count", uid: "usageCount" },
  { name: "Design System Count", uid: "designSystemCount" },
  { name: "Actions", uid: "actions" },
];

interface IComponentTypeTable {
  componentTypes: ComponentType[];
  totalPages: number;
}
export const ComponentTypeTable = ({
  componentTypes,
  totalPages,
}: IComponentTypeTable) => {
  const { currentPage, router, createPageUrl } = usePagination(totalPages);

  const renderCell = useCallback(
    (componentType: ComponentType, columnKey: React.Key) => {
      switch (columnKey) {
        case "component":
          return (
            <User
              name={componentType.name}
              avatarProps={{
                radius: "lg",
                src: componentType?.componentImage?.url || "",
              }}
            >
              {componentType.name}
            </User>
          );
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[componentType.state ? "active" : "paused"]}
              size="sm"
              variant="flat"
            >
              {componentType.state ? "Active" : "Inactive"}
            </Chip>
          );
        case "type":
          return (
            <Chip size="sm" color="success" variant="dot">
              {componentType.type}
            </Chip>
          );
        case "usageCount":
          return <span>{componentType.usageCount}</span>;
        case "designSystemCount":
          return <span>{componentType.designSystemCount}</span>;
        case "link":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[componentType.link ? "active" : "paused"]}
              size="sm"
              variant="light"
            >
              {componentType.link ? "Visible" : "Hidden"}
            </Chip>
          );
        case "actions":
          return (
            <div className="flex items-center gap-2 justify-center">
              <Tooltip content="Edit">
                <Link href={`/dashboard/component-type/${componentType.id}/`}>
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
      aria-label="Component Types Table"
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
      <TableBody items={componentTypes}>
        {(componentType) => (
          <TableRow key={componentType.id}>
            {(columnKey) => (
              <TableCell key={columnKey}>
                {renderCell(componentType, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
