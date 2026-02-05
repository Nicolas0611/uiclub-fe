import { getCompanyById } from "@/actions/company/get-company-by-id";
import FormWrapper from "@/components/shared/FormWrapper/FormWrapper";
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
    <FormWrapper
      icon={<BuildingStorefrontIcon className="size-5 text-gray-500" />}
      title="Nueva empresa"
    >
      <CompanyForm company={company} />
    </FormWrapper>
  );
};

export default CompanyDetailPage;
