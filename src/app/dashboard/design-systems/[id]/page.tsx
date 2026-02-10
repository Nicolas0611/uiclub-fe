import { getCompanies } from "@/actions/company/get-companies";
import { fetchDesignSystemsById } from "@/actions/design-system/design-actions";
import FormWrapper from "@/components/shared/FormWrapper/FormWrapper";
import { DesignSystem } from "@/interfaces/design-system-interface";
import { PencilIcon } from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";
import DesignSystemForm from "../ui/DesignSystemForm";

const DesignDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const companies = await getCompanies();
  let designSystem = {} as DesignSystem;

  if (id !== "new") {
    const designSystemResponse = await fetchDesignSystemsById(id);
    if (designSystemResponse) {
      designSystem = designSystemResponse;
    }
  }

  if (!designSystem && id !== "new") {
    redirect("/dashboard/design-systems");
  }

  return (
    <div className="container mx-auto px-4">
      <FormWrapper
        icon={<PencilIcon className="size-5 text-gray-500" />}
        title="Design System"
      >
        <DesignSystemForm
          designSystem={designSystem}
          companies={companies.companies}
        />
      </FormWrapper>
    </div>
  );
};

export default DesignDetailPage;
