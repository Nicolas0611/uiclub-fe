import { auth } from "@/auth.config";
import Header from "@/components/shared/Header/Header";
import { Sidebar } from "@/components/shared/Sidebar/Sidebar";
import { redirect } from "next/navigation";

const DashboardLayout = async ({
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
        role={session.user.role} // ✅ PASS ROLE FROM SERVER
      />
      <section className="flex flex-col w-100 w-full">
        <Header />
        <div className="flex flex-col w-full gap-4 p-4">{children}</div>
      </section>
    </div>
  );
};

export default DashboardLayout;
