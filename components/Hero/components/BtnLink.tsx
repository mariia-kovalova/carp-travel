'use client';

import Link from 'next/link';

import BtnFrame from './BtnFrame';

interface IProps {
  text: string;
  href: string;
}

const BtnLink: React.FC<IProps> = ({ text, href }) => {
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
      className="xl:p-[11px] md:w-full md:py-[1px] relative block
               w-[280px] bg-white/10
               px-[18px] py-[3px] transition-colors
              hover:bg-white/20 focus:bg-white/20 active:bg-white/20"
    >
      <p className="xl:text-[32px] text-center text-[18px] font-bold uppercase leading-[48px]">
        {text}
      </p>
      <BtnFrame />
    </Link>
  );
};

export default BtnLink;
