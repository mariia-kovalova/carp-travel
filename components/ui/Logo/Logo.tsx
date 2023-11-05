import Image from 'next/image';
import classNames from 'classnames';

import data from '@/data/common.data.json';
import logo from '@/public/images/common/logo.png';
import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const logoClasses = classNames(
    'p-[4px] font-katarina transition-colors hover:bg-white/5 focus:bg-white/5 active:bg-white/5',
    className,
  );

  return (
    <a className={logoClasses} href="./">
      <Image
        className="h-auto"
        src={logo}
        alt="carp travel logo"
        width="61"
        priority
      />
      <p className="mt-[2px] leading-[14px] tracking-[.185em]">{data.title}</p>
    </a>
  );
};
