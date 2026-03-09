"use client";
import IFrame from "@/components/custom/component-page/IFrame/IFrame";
import { Modal, ModalBody, ModalContent, ModalHeader } from "@heroui/react";

interface Props {
  url: string;
  open: boolean;
  onClose: () => void;
}
const FigmaModal = ({ url, open, onClose }: Props) => {
  return (
    <Modal size="4xl" isOpen={open} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>Figma</ModalHeader>
        <ModalBody>
          <IFrame link={url} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FigmaModal;
