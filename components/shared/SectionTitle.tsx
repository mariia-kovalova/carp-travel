interface IProps {
  title: {
    text: string;
    accent: string;
  };
}

const SectionTitle: React.FC<IProps> = ({ title }) => (
  <h2 className="section-title">
    {title.text}
    <span className="font-medium"> {title.accent}</span>
  </h2>
);

export default SectionTitle;
