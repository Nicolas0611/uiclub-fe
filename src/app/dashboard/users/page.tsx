import { getAllUsers } from "@/actions/users/get-all-users";
import { Card, CardHeader, Chip, User } from "@heroui/react";

const UsersPage = async () => {
  const data = await getAllUsers();
  if (!data.ok) return <div>{data.message}</div>;
  console.log({ users: data.users });

  return (
    <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
      {data.users?.map((user) => (
        <Card key={user.id} className="py-2">
          <CardHeader className="px-4 flex-col items-start">
            <div className="w-full flex flex-row justify-between gap-2 items-center">
              <User
                avatarProps={{
                  radius: "lg",
                }}
                name={user.name}
                description={user.email}
              >
                <p className="text-tiny uppercase font-bold">{user.name}</p>
              </User>
              <Chip
                className="capitalize"
                color={user.role === "admin" ? "success" : "secondary"}
                size="sm"
                variant="flat"
              >
                {user.role}
              </Chip>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default UsersPage;
