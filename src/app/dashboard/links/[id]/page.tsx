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

  return (
    <FormWrapper
      icon={<LinkIcon className="size-5 text-gray-500" />}
      title="Link"
    >
      <LinkForm link={link} />
    </FormWrapper>
  );
};

export default LinkDetailPage;
