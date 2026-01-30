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
      {/* Desktop Sidebar */}
      <Sidebar
        user={{
          name: session.user.name || "Not found",
          email: session.user.email || "Not found",
        }}
      />
      <section className="flex flex-col w-100 w-full">
        <header className="flex  w-fullitems-center justify-between px-4 py-3 bg-white border-b border-gray-200">
          <h1 className="text-lg text-gray-500">Dashboard</h1>
        </header>
        <div className="flex flex-col w-full gap-4 p-4">{children}</div>
      </section>
    </div>
  );
};

export default DashboarLayout;
