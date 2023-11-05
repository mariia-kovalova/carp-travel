'use client';

import Link from 'next/link';

import BtnFrame from './BtnFrame';
import smoothScroll from '@/utils/smoothScroll';

interface IProps {
  text: string;
  href: string;
}

const BtnLink: React.FC<IProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      onClick={e => smoothScroll(e, href)}
      className="relative block w-[280px] bg-white/10 px-[18px]
               py-[3px] transition-colors
               hover:bg-white/20 focus:bg-white/20 active:bg-white/20
              md:w-full md:py-[1px] xl:p-[11px]"
    >
      <p className="text-center text-lg font-bold uppercase leading-[48px] xl:text-[32px]">
        {text}
      </p>
      <BtnFrame />
    </Link>
  );
};

export default BtnLink;
