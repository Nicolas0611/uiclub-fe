"use client";

import { deleteUser } from "@/actions/users/delete-user";
import { TrashIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { User } from "@prisma/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const DeleteModal = ({ user }: { user: User }) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit } = useForm<User>();

  const handleDelete = async () => {
    setIsLoading(true);
    const result = await deleteUser(user.id);
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
      <Button size="sm" variant="light" color="danger" onPress={onOpen}>
        <TrashIcon className="size-5" />
        Delete
      </Button>

      <Modal
        isOpen={isOpen}
        isDismissable={!isLoading}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <form onSubmit={handleSubmit(handleDelete)}>
              <ModalHeader className="flex flex-row gap-1 items-center">
                <TrashIcon className="size-5 text-danger" />
                Delete User
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete this user?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="primary" type="submit" isLoading={isLoading}>
                  Delete
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteModal;
