interface Props {
  title: string;
}
const HomePill = ({ title }: Props) => {
  return (
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 bg-primary-50 py-1 text-sm/6 text-gray-600 ring-1 ring-primary">
        {title}
      </div>
    </div>
  );
};

export default HomePill;
