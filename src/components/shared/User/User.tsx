import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import { Avatar, Button } from "@heroui/react";

export interface UserProps {
  name: string;
  email: string;
}

const User = ({ name, email }: UserProps) => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-3">
        <Avatar src="https://i.pravatar.cc/150?u=user1" size="sm" />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
          <p className="text-xs text-gray-500 truncate">{email}</p>
        </div>
        <Button isIconOnly size="sm" variant="light">
          <ArrowRightEndOnRectangleIcon className="size-5" />
        </Button>
      </div>
    </div>
  );
};

export default User;
