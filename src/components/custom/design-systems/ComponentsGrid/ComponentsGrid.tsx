import { ComponentType } from "@/interfaces/design-system-interface";
import { Card, CardBody, CardFooter, Chip } from "@heroui/react";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import HeartButton from "../HeartButton/HeartButton";
interface ComponentsProps {
  components: ComponentType[];
  isWebsiteHref?: boolean;
}
const ComponentsGrid = async ({
  components,
  isWebsiteHref = true,
}: ComponentsProps) => {
  const cookieStore = await cookies();
  const saved = JSON.parse(cookieStore.get("saved")?.value ?? "{}") as Record<
    string,
    number
  >;

  return (
    <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
      {components.map((component, index) => (
        <Card
          isHoverable={true}
          href={
            isWebsiteHref ? component.link : `/components/${component?.link}`
          }
          as={Link}
          target={isWebsiteHref ? "_blank" : undefined}
          key={`component_${index}`}
          shadow="none"
          className="border-1 border-solid border-gray-200"
          isDisabled={component.link ? false : true}
        >
          <CardBody className="relative overflow-visible p-3">
            <HeartButton component={component} saved={saved} />
            <Image
              alt={`${component.name}_img`}
              className="w-full object-cover h-[140px]"
              src={component?.componentImage?.url}
              width={1000}
              height={1000}
              style={{ height: "100%" }}
              loading="lazy"
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <div className="flex flex-row gap-1 items-center">
              <p>{component.name}</p>
              {!component.link && (
                <Chip size="sm" color="warning" variant="flat">
                  Soon
                </Chip>
              )}
            </div>

            <Chip size="sm" color="success" variant="dot">
              {component?.type || component?.category}
            </Chip>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ComponentsGrid;
