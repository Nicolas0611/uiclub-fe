import { getCompanyById } from "@/actions/company/get-company-by-id";
import { Company } from "@/interfaces/company-interface";
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
    <div>
      <CompanyForm company={company} />
    </div>
  );
};

export default CompanyDetailPage;
