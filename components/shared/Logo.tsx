import Image from 'next/image';

import LINKS from '@/constants/links';

import info from '@/data/website.data.json';
import logo from '@/public/images/common/logo.png';

const Logo = () => (
  <a
    className="font-katarina p-[4px] transition-colors hover:bg-white/5 focus:bg-white/5 active:bg-white/5"
    href={`#${LINKS.hero}`}
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
  </a>
);

export default Logo;
