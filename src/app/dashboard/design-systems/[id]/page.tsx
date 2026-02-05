import { fetchDesignSystemsById } from "@/actions/design-system/design-actions";
import FormWrapper from "@/components/shared/FormWrapper/FormWrapper";
import { PencilIcon } from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";
import DesignSystemForm from "./ui/DesignSystemForm";

const DesignDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const designSystem = await fetchDesignSystemsById(id);

  if (!designSystem) {
    redirect("/dashboard/design-systems");
  }

  return (
    <div className="container mx-auto px-4">
      <FormWrapper
        icon={<PencilIcon className="size-5 text-gray-500" />}
        title="Design System"
      >
        <DesignSystemForm />
      </FormWrapper>
    </div>
  );
};

export default DesignDetailPage;
