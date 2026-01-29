import { auth } from "@/auth.config";
import { Sidebar } from "@/components/shared/Sidebar/Sidebar";
import { redirect } from "next/navigation";

const DashboarLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50">
      <Sidebar
        user={{
          name: session.user.name || "Not found",
          email: session.user.email || "Not found",
        }}
      />
      <div className="flex flex-col w-full gap-4">{children}</div>
    </div>
  );
};

export default DashboarLayout;
