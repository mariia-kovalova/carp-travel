import classNames from 'classnames';
import smoothScroll from '@/utils/smoothScroll';
import { NavLinkProps } from './types';

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  text,
  onClick,
  variant,
  className = '',
}) => {
  const navLinkClasses = classNames(
    'block common-transition',
    'hover:scale-[1.1] hover:bg-white/5 focus:scale-[1.1] focus:bg-white/5 active:scale-[1.1] active:bg-white/5',
    {
      'font-normal leading-[17px] tracking-[.1em]': variant === 'header',
      'text-center text-lg font-normal leading-normal tracking-[1.8px]':
        variant === 'mobile-menu',
    },
    className,
  );

  const handleNavLinkClick = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) onClick();
    smoothScroll(e, href);
  };

  return (
    <a href={href} onClick={handleNavLinkClick} className={navLinkClasses}>
      {text}
    </a>
  );
};
