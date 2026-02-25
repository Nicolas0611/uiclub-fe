import { getComponentImages } from "@/actions/component-images/get-component-images";
import { getComponentById } from "@/actions/component/get-component-by-id";
import { fetchDesignSystems } from "@/actions/design-system/design-actions";
import FormWrapper from "@/components/shared/FormWrapper/FormWrapper";
import { Component } from "@/interfaces/design-system-interface";
import { PencilIcon } from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";
import ComponentForm from "../ui/ComponentForm/ComponentForm";

const ComponentDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  let component: Component = {} as Component;
  const designSystems = await fetchDesignSystems();
  const componentImages = await getComponentImages();

  if (id !== "new") {
    const componentResponse = await getComponentById(id);
    if (componentResponse.ok) {
      component = componentResponse.component!;
    }
  }
  if (!component && id !== "new") {
    redirect("/dashboard/components");
  }

  return (
    <FormWrapper
      icon={<PencilIcon className="size-5 text-gray-500" />}
      title="Crear componente"
    >
      <ComponentForm
        component={component}
        designSystems={designSystems}
        componentImages={componentImages.images}
      />
    </FormWrapper>
  );
};

export default ComponentDetailPage;
