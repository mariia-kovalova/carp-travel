import Link from 'next/link';

import NavBarLinks from '@/constants/navBarLinks';

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
    <nav className="smOnly:hidden">
      <ul
        className="tracking-[ 0.1em] xl:gap-[48px] md:gap-[16px] flex text-[14px]
                  font-normal leading-[17px]"
      >
        {NavBarLinks.map(({ href, title }) => (
          <li
            className="transition-transform hover:scale-[1.1] focus:scale-[1.1]"
            key={href}
          >
            <Link
              href={href}
              onClick={handleScroll}
              className="p-[4px] transition-colors
                        hover:bg-white/5 
                        focus:bg-white/5"
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
