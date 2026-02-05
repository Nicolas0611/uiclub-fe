import { fetchDesignSystems } from "@/actions/design-system/design-actions";
import AdminGridCard from "./ui/AdminGridCard";

const DesignSystemPage = async () => {
  const designSystems = await fetchDesignSystems();
  return <AdminGridCard designSystems={designSystems} />;
};

export default DesignSystemPage;
