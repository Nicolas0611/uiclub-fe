import { getLinks } from "@/actions/links/get-links";
import LinkTable from "@/app/dashboard/links/ui/LinkTable";
import { auth } from "@/auth.config";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Link } from "@heroui/react";

const LinkDashboardPage = async () => {
  const { links, ok, message } = await getLinks();
  const session = await auth();
  const isAdmin = session?.user?.role === "admin";
  if (!ok) return <p>{message}</p>;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <Button
          size="sm"
          color="primary"
          variant="solid"
          as={Link}
          href="/dashboard/links/new"
        >
          <PlusIcon className="size-5" />
          Add Link
        </Button>
      </div>
      <LinkTable links={links} isAdmin={isAdmin} />
    </div>
  );
};

export default LinkDashboardPage;
