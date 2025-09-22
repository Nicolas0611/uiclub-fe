import Image from "next/image";

interface Props {
  name: string;
  category: string;
  image: string;
}
const HomeCard = ({ name, category, image }: Props) => (
  <div className="group relative bg-white rounded-2xl border border-gray-200/60 overflow-hidden hover:border-gray-300/80 transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/5">
    <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <Image
        alt={`${image}_img`}
        className="w-full object-cover h-[140px]"
        src={`/assets/${image}.png`}
        width={1000}
        height={1000}
        quality={100}
        style={{ height: "100%" }}
        loading="lazy"
      />
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
        {category}
      </div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
        {name}
      </h3>
    </div>
  </div>
);
export default HomeCard;
