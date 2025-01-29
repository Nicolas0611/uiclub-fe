interface Props {
  quantity: number;
}
export const CardBody = ({ quantity }: Props) => {
  return (
    <div className="flex flex-row justify-between w-full border-1 border-solid border-gray-200 p-4 rounded-lg">
      <div className="flex flex-col items-center">
        <p className="text-2xl">{quantity}</p>
        <p className="text-sm text-neutral-400">components</p>
      </div>
      <div className="flex flex-col d-flex items-center">
        <p className="text-2xl">{quantity}</p>
        <p className="text-sm text-neutral-400">components</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-2xl">{quantity}</p>
        <p className="text-sm text-neutral-400">components</p>
      </div>
    </div>
  );
};
