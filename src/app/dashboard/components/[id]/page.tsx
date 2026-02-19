import { getComponentById } from "@/actions/component/get-component-by-id";
import FormWrapper from "@/components/shared/FormWrapper/FormWrapper";
import { Component } from "@/interfaces/design-system-interface";
import { PencilIcon } from "@heroicons/react/24/outline";
import { redirect } from "next/navigation";

const ComponentDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  let component: Component = {} as Component;

  if (id !== "new") {
    const componentResponse = await getComponentById(id);
    if (componentResponse.ok) {
      component = componentResponse.component!;
    }
  }
  if (!component && id !== "new") {
    redirect("/dashboard/components");
  }
  console.log(component);

  return (
    <FormWrapper
      icon={<PencilIcon className="size-5 text-gray-500" />}
      title="Component"
    >
      <div>ComponentDetailPage</div>
    </FormWrapper>
  );
};

export default ComponentDetailPage;
