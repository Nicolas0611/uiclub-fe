"use client";

import { createRelation } from "@/actions/component-type/create-relation";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
} from "@heroui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FormOptions } from "../ActionsBar/ActionsBar";

export interface FormRelationData {
  componentTypeId: string;
  designSystemId: string;
}

interface Props {
  isOpen: boolean;
  formOptions: FormOptions;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
}

const RelationModal = ({
  isOpen,
  formOptions,
  onOpenChange,
  onClose,
}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormRelationData>({
    defaultValues: {
      componentTypeId: "",
      designSystemId: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: FormRelationData) => {
    if (!data.componentTypeId && !data.designSystemId) return;

    const result = await createRelation(data);

    if (result?.ok) {
      toast.success(result.message);
      reset();
      onClose();
    } else {
      toast.error(result.message);
    }
    setIsLoading(false);
  };
  return (
    <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>Relación de Componente</ModalHeader>
        <ModalBody>
          <form
            className="flex flex-col gap-4 pb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Select
              required
              label="Component Type"
              {...register("componentTypeId")}
            >
              {formOptions.componentTypes.map((componentType) => (
                <SelectItem key={componentType.value}>
                  {componentType.label}
                </SelectItem>
              ))}
            </Select>
            <Select
              required
              label="Design System"
              {...register("designSystemId")}
            >
              {formOptions.designSystems.map((designSystem) => (
                <SelectItem key={designSystem.value}>
                  {designSystem.label}
                </SelectItem>
              ))}
            </Select>
            <div className="flex justify-end gap-4 border-t border-gray-200 pt-4">
              <Button
                variant="light"
                onPress={() => {
                  reset();
                  onClose();
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                color="primary"
                isLoading={isLoading}
                isDisabled={!isValid}
              >
                Relación
              </Button>
            </div>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RelationModal;
