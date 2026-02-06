import { ComponentType } from "@/interfaces/design-system-interface";
import { Image } from "@heroui/react";

interface BrandsMapperProps {
  brands?: ComponentType["relatedDesignSystems"];
}
const BrandsMapper = ({ brands = [] }: BrandsMapperProps) => {
  const visibleBrands = brands.slice(0, 2);
  const remainingCount = brands.length - visibleBrands.length;
  return (
    <div className="flex">
      {visibleBrands.map((brand, index) => (
        <div
          key={`brand_${index}`}
          className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 -ml-1"
        >
          <Image
            alt="heroui logo"
            height={32}
            src={brand?.designSystem?.companyImage?.url || ""}
            width={32}
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium text-gray-600 -ml-1">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

export default BrandsMapper;
