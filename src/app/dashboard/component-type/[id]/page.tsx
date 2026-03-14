import { getComponentImages } from "@/actions/component-images/get-component-images";
import { getComponentTypeById } from "@/actions/component-type/get-component-type-by-id";
import FormWrapper from "@/components/shared/FormWrapper/FormWrapper";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";
import ComponentTypeForm from "./ui/ComponentTypeForm/ComponentTypeForm";

const ComponenTypeDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const { data: componentType } = await getComponentTypeById({ id });
  const { images: componentImages } = await getComponentImages();

  if (!componentType && id !== "new") {
    redirect("/dashboard/component-types");
  }

  return (
    <FormWrapper
      icon={<BuildingStorefrontIcon className="size-5 text-gray-500" />}
      title="Component Type"
    >
      <ComponentTypeForm
        componentType={componentType!}
        componentImages={componentImages}
      />
    </FormWrapper>
  );
};

export default ComponenTypeDetailPage;
