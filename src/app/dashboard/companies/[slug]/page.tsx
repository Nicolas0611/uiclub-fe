import { getCompanyById } from "@/actions/company/get-company-by-id";
import { Company } from "@/interfaces/company-interface";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";
import CompanyForm from "./ui/CompanyForm";

const CompanyDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  let company: Company = {} as Company;
  if (slug !== "new") {
    const companyResponse = await getCompanyById(Number(slug));
    if (companyResponse.ok) {
      company = companyResponse.company!;
    }
  }
  if (!company && slug !== "new") {
    redirect("/dashboard/companies");
  }

  return (
    <div className="container mx-auto bg-white p-4 border border-gray-200 rounded-2xl flex flex-col gap-4 w-full max-w-3xl">
      <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
        <BuildingStorefrontIcon className="size-5 text-gray-500" />
        <h1 className="text-sm text-gray-500">Nueva empresa</h1>
      </div>
      <CompanyForm company={company} />
    </div>
  );
};

export default CompanyDetailPage;
