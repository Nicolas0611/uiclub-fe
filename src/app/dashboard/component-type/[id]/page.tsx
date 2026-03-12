import { getComponentDesign } from "@/actions/component-type/get-component-design";
import { getComponentTypeById } from "@/actions/component-type/get-component-type-by-id";
import { fetchComponentList } from "@/actions/component/component-action";
import { fetchDesignSystems } from "@/actions/design-system/design-actions";
import FormWrapper from "@/components/shared/FormWrapper/FormWrapper";
import {
  ComponentType,
  DesignSystem,
} from "@/interfaces/design-system-interface";
import { optionsMapper } from "@/utils";
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
  const { data: componentDesignData } = await getComponentDesign({ id });
  const designSystems = await fetchDesignSystems();
  const { components } = await fetchComponentList({});

  const componentsOptions = optionsMapper<ComponentType>(components);
  const designSystemsOptions = optionsMapper<DesignSystem>(designSystems);

  if (!componentType) {
    redirect("/dashboard/component-types");
  }

  return (
    <FormWrapper
      icon={<BuildingStorefrontIcon className="size-5 text-gray-500" />}
      title="Component Type"
    >
      <ComponentTypeForm
        componentType={componentType!}
        componentDesign={componentDesignData!}
        componentsOptions={componentsOptions}
        designSystemsOptions={designSystemsOptions}
      />
    </FormWrapper>
  );
};

export default ComponenTypeDetailPage;
