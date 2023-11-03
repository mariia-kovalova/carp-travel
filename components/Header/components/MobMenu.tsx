import Link from 'next/link';

import NavBarLinks from '@/constants/navBarLinks';

interface IProps {
  onMenuClose: () => void;
}

const MobMenu: React.FC<IProps> = ({ onMenuClose }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetId = e.currentTarget.href.replace(/.*\#/, '');
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: 'smooth',
    });
    onMenuClose();
  };

  return (
    <div className="bg-grey/75 md:hidden absolute left-0 top-0 z-[3] h-[100vh] w-[100vw] backdrop-blur-[25px]">
      <nav className="container relative flex h-full items-center justify-center">
        <button
          className="absolute right-[18px] top-[44px] text-[14px] font-normal uppercase leading-normal tracking-[1.4px]"
          type="button"
          onClick={onMenuClose}
        >
          close
        </button>
        <ul className="flex flex-col gap-[48px] text-center text-[18px] font-normal leading-normal tracking-[1.8px]">
          {NavBarLinks.map(({ href, title }) => (
            <li
              className="transition-transform hover:scale-[1.1] focus:scale-[1.1]"
              key={href}
            >
              <Link href={href} onClick={handleScroll}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobMenu;
