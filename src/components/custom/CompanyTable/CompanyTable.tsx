"use client";

import type { ChipProps } from "@heroui/react";

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

export const columns = [
  { name: "Name", uid: "name" },
  { name: "Design System", uid: "designSystem" },
  { name: "Status", uid: "status" },
  { name: "Actions", uid: "actions" },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

interface ICompanyTable {
  companies: Company[];
  isAdmin: boolean;
}
const CompanyTable = ({ companies = [], isAdmin }: ICompanyTable) => {
  const renderCell = useCallback((company: Company, columnKey: React.Key) => {
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: company?.companyImage?.[0]?.url }}
            description={company.name}
            name={company.name}
          >
            {company.name}
          </User>
        );
      case "designSystem":
        return (
          <div className="flex flex-col">
            {company?.designSystem?.name ? (
              <p className="text-bold text-sm capitalize">
                {company?.designSystem?.name}
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
              <Link href={`/dashboard/companies/${company.id}/`}>
                <PencilIcon className="size-5 text-default-400" />
              </Link>
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
