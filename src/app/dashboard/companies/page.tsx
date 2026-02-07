import { getCompanies } from "@/actions/company/get-companies";
import { auth } from "@/auth.config";
import CompanyTable from "@/components/custom/CompanyTable/CompanyTable";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Link } from "@heroui/react";

const CompaniesPage = async () => {
  const { companies, ok, message } = await getCompanies();
  const session = await auth();

  const isAdmin = session?.user?.role === "admin";
  if (!ok) return <p>{message}</p>;

  return (
    <div className="flex flex-col h-full gap-3">
      <div className="w-full flex items-center justify-end">
        <Button
          size="sm"
          color="primary"
          variant="solid"
          as={Link}
          href="/dashboard/companies/new"
        >
          <PlusIcon className="size-5" />
          Add Company
        </Button>
      </div>
      <CompanyTable companies={companies} isAdmin={isAdmin} />
    </div>
  );
};

export default CompaniesPage;
