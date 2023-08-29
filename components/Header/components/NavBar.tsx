import { NavBarLinks } from '@/constants/links';
import Link from 'next/link';

const NavBar = () => {
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
    <nav className="max-tablet:hidden">
      <ul
        className="flex font-normal text-[14px] leading-[17px] tracking-[ 0.1em]
                  tablet:gap-[16px] desktop:gap-[48px] "
      >
        {NavBarLinks.map(({ href, title }) => (
          <li
            className="hover:scale-[1.1] focus:scale-[1.1] transition-transform"
            key={href}
          >
            <Link
              href={href}
              onClick={handleScroll}
              className="p-[4px] transition-colors
                        hover:bg-transparent-white-dark 
                        focus:bg-transparent-white-dark "
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
