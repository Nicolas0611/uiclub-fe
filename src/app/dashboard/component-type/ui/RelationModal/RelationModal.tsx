import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
} from "@heroui/react";
import { useForm } from "react-hook-form";
import { FormOptions } from "../ActionsBar/ActionsBar";

interface Props {
  isOpen: boolean;
  formOptions: FormOptions;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
}
interface FormData {
  componentTypeId: string;
  designSystemId: string;
}
const RelationModal = ({
  isOpen,
  formOptions,
  onOpenChange,
  onClose,
}: Props) => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      componentTypeId: "",
      designSystemId: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
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
            <Select label="Component Type" {...register("componentTypeId")}>
              {formOptions.componentTypes.map((componentType) => (
                <SelectItem key={componentType.value}>
                  {componentType.label}
                </SelectItem>
              ))}
            </Select>
            <Select label="Design System" {...register("designSystemId")}>
              {formOptions.designSystems.map((designSystem) => (
                <SelectItem key={designSystem.value}>
                  {designSystem.label}
                </SelectItem>
              ))}
            </Select>
            <div className="flex justify-end gap-4 border-t border-gray-200 pt-4">
              <Button variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button type="submit" color="primary">
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
