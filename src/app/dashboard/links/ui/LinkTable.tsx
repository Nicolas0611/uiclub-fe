"use client";

import type { ChipProps } from "@heroui/react";

import type { Link } from "@/interfaces/design-system-interface";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  Chip,
  Link as NextLink,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@heroui/react";
import React, { useCallback } from "react";

type LinkWithDesignSystem = Link & {
  designSystem?: { name: string };
};

export const columns = [
  { name: "Design System", uid: "designSystem" },
  { name: "Web", uid: "web" },
  { name: "Storybook", uid: "storybook" },
  { name: "Figma", uid: "figma" },
  { name: "Status", uid: "status" },
  { name: "Actions", uid: "actions" },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
};

const ExternalLinkCell = ({
  href,
  label,
}: {
  href: string | null;
  label: string;
}) => {
  if (!href?.trim()) {
    return (
      <Chip className="capitalize" color="default" size="sm" variant="flat">
        —
      </Chip>
    );
  }
  return (
    <NextLink isExternal href={href} size="sm">
      {label}
    </NextLink>
  );
};

interface ILinkTable {
  links: LinkWithDesignSystem[];
  isAdmin?: boolean;
}

const LinkTable = ({ links = [], isAdmin = false }: ILinkTable) => {
  const renderCell = useCallback(
    (link: LinkWithDesignSystem, columnKey: React.Key) => {
      switch (columnKey) {
        case "designSystem":
          return (
            <div className="flex flex-col">
              {link?.designSystem?.name ? (
                <p className="text-bold text-sm capitalize">
                  {link.designSystem.name}
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
        case "web":
          return <ExternalLinkCell href={link.web} label="Web" />;
        case "storybook":
          return <ExternalLinkCell href={link.storybook} label="Storybook" />;
        case "figma":
          return <ExternalLinkCell href={link.figma} label="Figma" />;
        case "status":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[link.state ? "active" : "paused"]}
              size="sm"
              variant="flat"
            >
              {link.state ? "Active" : "Inactive"}
            </Chip>
          );
        case "actions":
          return (
            <div className="flex items-center gap-2 justify-center">
              <Tooltip content="Edit">
                <NextLink href={`/dashboard/links/${link.id}/`}>
                  <PencilIcon className="size-5 text-default-400" />
                </NextLink>
              </Tooltip>
              {isAdmin && (
                <Tooltip color="danger" content="Delete">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <TrashIcon className="size-5 text-danger" />
                  </span>
                </Tooltip>
              )}
            </div>
          );
        default:
          return null;
      }
    },
    [],
  );

  return (
    <Table
      aria-label="Links Table"
      shadow="none"
      className="border border-gray-200 rounded-lg"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={links}>
        {(link) => (
          <TableRow key={link.id}>
            {(columnKey) => (
              <TableCell>{renderCell(link, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default LinkTable;
