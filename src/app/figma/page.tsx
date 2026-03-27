import { getDesignSystemFigmaFile } from "@/actions/design-system/design-system-figma-file";
import FigmaFileCard from "@/components/custom/Figma/FigmaFileCard/FigmaFileCard";
import FigmaHero from "@/components/custom/Figma/FigmaHero/FigmaHero";
import { DesignSystem } from "@prisma/client";

const FigmaPage = async () => {
  const { data, ok, message } = await getDesignSystemFigmaFile();
  if (!ok) {
    return <div>{message}</div>;
  }
  return (
    <div>
      <FigmaHero />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
        {data.map((file) => (
          <FigmaFileCard
            key={file.id}
            figmaFile={
              file as DesignSystem & {
                _count: { components: number; componentTypes: number };
              }
            }
          />
        ))}
      </div>
    </div>
  );
};

export default FigmaPage;
