"use client";

import { editUser } from "@/actions/users/edit-user";
import { ROLES } from "@/constants";
import { User } from "@/interfaces/user-interface";
import { PencilIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const EditModal = ({ user }: { user: User }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const { register, handleSubmit } = useForm<User>({
    defaultValues: {
      name: user.name,
      email: user.email,
      role: user.role,
      image: user.image,
    },
  });

  const handleEdit = async (data: User) => {
    data.id = user.id;
    setIsLoading(true);
    const result = await editUser(data);
    if (!result?.ok) {
      toast.error(result?.message);
      setIsLoading(false);
      return;
    }
    toast.success(result.message);
    setIsLoading(false);
    onClose();
  };

  return (
    <>
      <Button size="sm" onPress={onOpen} variant="light">
        <PencilIcon className="size-5" />
        Edit
      </Button>

      <Modal
        isOpen={isOpen}
        isDismissable={!isLoading}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <form onSubmit={handleSubmit(handleEdit)}>
              <ModalHeader className="flex flex-col gap-1">
                Edit User
              </ModalHeader>
              <ModalBody>
                <Input label="Name" {...register("name")} />
                <Input label="Email" {...register("email")} />
                <Select label="Role" {...register("role")}>
                  {ROLES.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" type="submit" isLoading={isLoading}>
                  Edit
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditModal;
