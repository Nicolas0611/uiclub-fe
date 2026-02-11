import { getComponents } from "@/actions/component/get-components";
import { ComponentTable } from "./ui/ComponentTable/ComponentTable";

interface IComponentsPage {
  searchParams: Promise<{ page: number; take: number }>;
}
const ComponentsPage = async ({ searchParams }: IComponentsPage) => {
  const { page } = await searchParams;

  const { components, ok, message, totalPages } = await getComponents({ page });

  if (!ok) return <p>{message}</p>;
  return (
    <div className="flex flex-col gap-4">
      <ComponentTable components={components} totalPages={totalPages} />
    </div>
  );
};

export default ComponentsPage;
