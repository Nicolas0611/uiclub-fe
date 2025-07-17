interface Props {
  link: string;
}
const IFrame = ({ link }: Props) => {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <iframe width="100%" height="450" src={link} allowFullScreen></iframe>
    </div>
  );
};

export default IFrame;
