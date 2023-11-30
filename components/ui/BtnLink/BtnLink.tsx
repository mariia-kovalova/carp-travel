'use client';

import classNames from 'classnames';
import { smoothScroll } from '@/utils';
import { BtnLinkProps } from './types';
import { BtnFrame } from './BtnFrame';

export const BtnLink: React.FC<BtnLinkProps> = ({
  href,
  children,
  className = '',
}) => {
  const btnClasses = classNames(
    'relative block bg-white/10 px-[18px] py-[3px] md:py-[1px] xl:p-[11px]',
    'transition-colors hover:bg-white/20 focus:bg-white/20 active:bg-white/20',
    className,
  );

  return (
    <a className={btnClasses} href={href} onClick={e => smoothScroll(e, href)}>
      <p className="text-center text-lg font-bold uppercase leading-[48px] xl:text-[32px]">
        {children}
      </p>
      <BtnFrame />
    </a>
  );
};
