interface IProps {
  text: string;
}

const SubmitBtn: React.FC<IProps> = ({ text }) => (
  <button type="submit" className="base-btn ml-auto">
    {text}
  </button>
);

export default SubmitBtn;
