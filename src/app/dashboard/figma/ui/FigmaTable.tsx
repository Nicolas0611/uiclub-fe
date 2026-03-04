"use client";

import { FigmaLinks } from "@/interfaces/design-system-interface";
import { EyeIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useCallback, useState } from "react";
import FigmaModal from "./FigmaModal";

export const columns = [
  { name: "Component", uid: "component" },
  { name: "Company", uid: "company" },
  { name: "Figma URL", uid: "url" },
];

interface FigmaTableProps {
  figmaLinks: FigmaLinks[];
}

const FigmaTable = ({ figmaLinks = [] }: FigmaTableProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [activeUrl, setActiveUrl] = useState("");

  const handleOpenModal = useCallback((url: string) => {
    setActiveUrl(url);
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setActiveUrl("");
  }, []);

  const renderCell = useCallback((figma: FigmaLinks, columnKey: React.Key) => {
    switch (columnKey) {
      case "component":
        return (
          <span className="text-sm font-medium">
            {figma.componentType?.name ?? "Unknown component"}
          </span>
        );
      case "company":
        return (
          <span className="text-sm">
            {figma.company?.name ?? "Unknown company"}
          </span>
        );
      case "url":
        return figma.url ? (
          <Button
            variant="light"
            color="primary"
            size="sm"
            onPress={() => handleOpenModal(figma.url)}
            startContent={<EyeIcon className="size-5" />}
          >
            Open in Figma
          </Button>
        ) : (
          <Chip size="sm" color="warning" variant="flat">
            No URL
          </Chip>
        );
      default:
        return null;
    }
  }, []);

  return (
    <>
      <FigmaModal url={activeUrl} open={openModal} onClose={handleCloseModal} />

      <Table
        aria-label="Figma Links Table"
        shadow="none"
        className="border border-gray-200 rounded-lg"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid}>{column.name}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={figmaLinks} emptyContent="No Figma links found">
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default FigmaTable;
