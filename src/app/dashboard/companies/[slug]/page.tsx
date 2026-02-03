import CompanyForm from "./ui/CompanyForm";

const CompanyDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  console.log({ slug });
  return (
    <div>
      <CompanyForm />
    </div>
  );
};

export default CompanyDetailPage;
