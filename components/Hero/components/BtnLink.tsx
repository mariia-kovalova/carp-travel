import { FC } from 'react';
import BtnFrame from './BtnFrame';
import Link from 'next/link';

interface IProps {
  text: string;
  href: string;
}

const BtnLink: FC<IProps> = ({ text, href }) => (
  <Link
    href={href}
    className="relative block px-[18px] py-[3px] w-[280px]
               bg-transparent-white-light transition-transform
               hover:bg-transparent-white-light-accent 
               focus:bg-transparent-white-light-accent
                tablet:py-[1px] tablet:w-full 
                desktop:p-[11px]"
  >
    <p
      className="text-[18px] font-bold leading-[48px] uppercase text-center 
                  desktop:text-[32px]"
    >
      {text}
    </p>
    <BtnFrame />
  </Link>
);

export default BtnLink;