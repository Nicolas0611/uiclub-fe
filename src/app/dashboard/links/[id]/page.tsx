import { fetchDesignSystems } from "@/actions/design-system/design-actions";
import { getLinkById } from "@/actions/links/get-link-by-id";
import FormWrapper from "@/components/shared/FormWrapper/FormWrapper";
import { Link } from "@/interfaces/design-system-interface";
import { LinkIcon } from "@heroicons/react/24/outline";
import LinkForm from "../ui/LinkForm";

const LinkDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  let link = {} as Link;

  if (id !== "new") {
    const linkResponse = await getLinkById(Number(id));
    if (linkResponse.ok) {
      link = linkResponse.link!;
    }
  }
  const designSystems = await fetchDesignSystems();

  const designSystemOptions = designSystems.map((designSystem) => ({
    label: designSystem.name,
    value: designSystem.id,
  }));
  console.log(designSystemOptions);

  return (
    <FormWrapper
      icon={<LinkIcon className="size-5 text-gray-500" />}
      title="Link"
    >
      <LinkForm link={link} designSystemsOptions={designSystemOptions} />
    </FormWrapper>
  );
};

export default LinkDetailPage;
