import { SliderNavButtonProps } from './types';

export const SliderNavButton: React.FC<SliderNavButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <button
      className="base-btn text-[25px] font-thin xl:text-[33px]"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};
