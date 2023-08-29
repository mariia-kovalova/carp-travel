import Image from 'next/image';
import Link from 'next/link';

import fonts from '@/app/fonts';

import LINKS from '@/constants/links';

import logo from '@/public/icons/logo.svg';

import info from '@/data/website.data.json';

const Logo = () => (
  <Link
    href={`#${LINKS.hero}`}
    className={`${fonts.karantina.className} p-[4px] transition-colors 
              hover:bg-transparent-white-dark 
              focus:bg-transparent-white-dark`}
  >
    <Image
      className="h-auto"
      src={logo}
      alt="carp travel logo"
      width="61"
      priority
    />
    <p className="mt-[2px] text-[14px] leading-[14px] tracking-[.185em]">
      {info.title}
    </p>
  </Link>
);

export default Logo;
