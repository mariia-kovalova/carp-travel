interface IProps {
  text: string;
}
const SubmitBtn: React.FC<IProps> = ({ text }) => (
  <button
    type="submit"
    className="block ml-auto uppercase text-[30px] font-medium px-[4px] transition-colors
               hover:bg-transparent-white-light-accent 
               focus:bg-transparent-white-light-accent"
  >
    {text}
  </button>
);

export default SubmitBtn;
