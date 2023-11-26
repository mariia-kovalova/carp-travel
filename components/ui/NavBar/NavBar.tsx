'use client';

import classNames from 'classnames';
import { NavLink } from '@/components/ui/NavLink';
import { NavBarProps } from './types';
import { navBarLinks } from '@/data/header.data';

export const NavBar: React.FC<NavBarProps> = ({
  variant,
  onClick,
  className = '',
}) => {
  const navBarClasses = classNames(
    'flex gap-12',
    {
      'mt-4 gap-12 md:gap-6 xl:gap-[54px]': variant === 'header',
      'flex-col': variant === 'mobile-menu',
    },
    className,
  );

  return (
    <ul className={navBarClasses}>
      {navBarLinks.map(({ href, text }) => (
        <li key={href}>
          <NavLink
            onClick={onClick}
            variant={variant}
            href={href}
            text={text}
          />
        </li>
      ))}
    </ul>
  );
};
