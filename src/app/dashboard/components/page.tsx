import { getComponents } from "@/actions/component/get-components";
import ComponentActions from "./ui/ComponentActions/ComponentActions";
import { ComponentTable } from "./ui/ComponentTable/ComponentTable";

interface IComponentsPage {
  searchParams: Promise<{ page: number; take: number; search: string }>;
}
const ComponentsPage = async ({ searchParams }: IComponentsPage) => {
  const { page, search } = await searchParams;

  const { components, ok, message, totalPages } = await getComponents({
    page,
    search,
  });

  if (!ok) return <p>{message}</p>;
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex items-center justify-end">
        <ComponentActions />
      </div>
      <ComponentTable components={components} totalPages={totalPages} />
    </div>
  );
};

export default ComponentsPage;
