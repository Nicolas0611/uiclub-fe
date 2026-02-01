"use client";

import type { ChipProps } from "@heroui/react";
import type { SVGProps } from "react";

import { Company } from "@/interfaces/company-interface";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  Chip,
  Link,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@heroui/react";
import React, { useCallback } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export const columns = [
  { name: "Name", uid: "name" },
  { name: "Design System", uid: "designSystem" },
  { name: "Status", uid: "status" },
  { name: "Actions", uid: "actions" },
];

export const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

type User = (typeof users)[0];

const CompanyTable = ({ companies = [] }: { companies: Company[] }) => {
  const renderCell = useCallback((company: Company, columnKey: React.Key) => {
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: company.companyImage.url }}
            description={company.name}
            name={company.name}
          >
            {company.name}
          </User>
        );
      case "designSystem":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              {company.designSystem.name}
            </p>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize"
            color={statusColorMap[company.state ? "active" : "paused"]}
            size="sm"
            variant="flat"
          >
            {company.state ? "Active" : "Inactive"}
          </Chip>
        );
      case "actions":
        return (
          <div className="flex items-center gap-2 justify-center">
            <Tooltip content="Edit">
              <Link href={`/dashboard/companies/${company.id}/edit`}>
                <PencilIcon className="size-5 text-default-400" />
              </Link>
            </Tooltip>
            <Tooltip color="danger" content="Delete">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <TrashIcon className="size-5 text-danger" />
              </span>
            </Tooltip>
          </div>
        );
    }
  }, []);

  return (
    <Table shadow="none" className="border border-gray-200 rounded-lg">
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
      <TableBody items={companies}>
        {(company) => (
          <TableRow key={company.id}>
            {(columnKey) => (
              <TableCell>{renderCell(company, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default CompanyTable;
