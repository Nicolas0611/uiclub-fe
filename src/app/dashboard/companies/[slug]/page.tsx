import CompanyForm from "./ui/CompanyForm";

const CompanyDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  return (
    <div>
      <CompanyForm />
    </div>
  );
};

export default CompanyDetailPage;
