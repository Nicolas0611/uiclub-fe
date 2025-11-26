interface Props {
  link: string;
}
const IFrame = ({ link }: Props) => {
  return (
    <div className="w-full border border-gray-200 rounded-2xl overflow-hidden">
      <iframe
        className="w-full"
        width="100%"
        height="460"
        src={link}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IFrame;
