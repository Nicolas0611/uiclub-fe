import { ComponentType } from "@/interfaces/design-system-interface";
import { Card, CardBody, CardFooter, Chip } from "@heroui/react";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import HeartButton from "../HeartButton/HeartButton";
interface ComponentsProps {
  components: ComponentType[];
}
const ComponentsGrid = async ({ components }: ComponentsProps) => {
  const cookieStore = await cookies();
  const saved = JSON.parse(cookieStore.get("saved")?.value ?? "{}") as Record<
    string,
    number
  >;
  /*   const verifyRelatedNameForImage = (
    componentName: string,
    relatedNames: Array<string>
  ): string | undefined => {
    const getImage = (name: string) =>
      IMAGES[name.toUpperCase().replace(/\s+/g, "")];
    return getImage(componentName) || relatedNames?.map(getImage).find(Boolean);
  }; */

  return (
    <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
      {components.map((component, index) => (
        <Card
          isHoverable={true}
          href={component?.link || "#"}
          as={Link}
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
              src={`/assets/${component.name}.png`}
              width={1000}
              height={1000}
              quality={100}
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
