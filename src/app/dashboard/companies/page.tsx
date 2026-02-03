import { getCompanies } from "@/actions/company/get-companies";
import CompanyTable from "@/components/custom/CompanyTable/CompanyTable";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Button, Link } from "@heroui/react";

const CompaniesPage = async () => {
  const { companies, ok, message } = await getCompanies();
  if (!ok) return <div>{message}</div>;

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
      <CompanyTable companies={companies} />
    </div>
  );
};

export default CompaniesPage;
