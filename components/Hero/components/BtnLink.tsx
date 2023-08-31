'use client';

import { FC } from 'react';
import Link from 'next/link';

import BtnFrame from './BtnFrame';

interface IProps {
  text: string;
  href: string;
}

const BtnLink: FC<IProps> = ({ text, href }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: 'smooth',
    });
  };

  return (
    <Link
      href={href}
      onClick={handleScroll}
      className="relative block px-[18px] py-[3px] w-[280px]
               bg-transparent-white-light transition-colors
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
};

export default BtnLink;
