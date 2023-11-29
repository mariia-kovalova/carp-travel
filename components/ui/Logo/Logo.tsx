import Image from 'next/image';
import classNames from 'classnames';

import data from '@/data/header.data.json';
import logo from '@/public/images/common/logo.png';
import { LogoProps } from './types';

export const Logo: React.FC<LogoProps> = ({ className }) => {
  const logoClasses = classNames('block pt-2 font-katarina', className);

  return (
    <a className={logoClasses} href="./">
      <Image
        className="h-auto"
        src={logo}
        alt="carp travel logo"
        width="60"
        priority
      />
      <p className="mt-[1px] leading-[14px] tracking-[.185em]">{data.title}</p>
    </a>
  );
};
