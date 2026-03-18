import { fetchComponentList } from "@/actions/component/component-action";
import ActionsBar from "./ui/ActionsBar/ActionsBar";
import { ComponentTypeTable } from "./ui/ComponentTypeTable/ComponentTypeTable";

interface IComponentTypePage {
  searchParams: Promise<{ page: number; search: string }>;
}
const ComponentTypePage = async ({ searchParams }: IComponentTypePage) => {
  const { page, search } = await searchParams;
  const urlPage = page ? page : 1;
  const { components, totalPages } = await fetchComponentList({
    page: urlPage,
    take: 10,
    search,
  });

  if (!components) {
    return <div>No component types found</div>;
  }

  return (
    <div className="flex flex-col h-full gap-3 pb-3">
      <ActionsBar />
      <ComponentTypeTable componentTypes={components} totalPages={totalPages} />
    </div>
  );
};

export default ComponentTypePage;
