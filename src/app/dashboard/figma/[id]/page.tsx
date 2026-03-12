import { getCompanies } from "@/actions/company/get-companies";
import { fetchComponentList } from "@/actions/component/component-action";
import { getFigmaById } from "@/actions/figma/get-figma-by-id";
import FormWrapper from "@/components/shared/FormWrapper/FormWrapper";
import { FigmaLinks } from "@/interfaces/design-system-interface";
import { PencilIcon } from "@heroicons/react/24/outline";
import FigmaForm from "./ui/FigmaForm/FigmaForm";

const FigmaDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  let figma: FigmaLinks = {} as FigmaLinks;
  if (id !== "new") {
    const { ok, data } = await getFigmaById(id);
    if (ok) {
      figma = data!;
    }
  }
  const { companies } = await getCompanies();
  const { components } = await fetchComponentList({});
  return (
    <FormWrapper
      icon={<PencilIcon className="size-5 text-gray-500" />}
      title="Figma"
    >
      <FigmaForm
        figma={figma}
        companies={companies}
        componentTypes={components}
      />
    </FormWrapper>
  );
};

export default FigmaDetailPage;
