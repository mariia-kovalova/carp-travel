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
    <div className="tablet:hidden absolute top-0 left-0 h-[100vh] w-[100vw] bg-dark-gray backdrop-blur-[25px]">
      <nav className="container relative h-full flex justify-center items-center">
        <button
          className="absolute top-[44px] right-[18px] text-[14px] font-normal leading-normal tracking-[1.4px] uppercase"
          type="button"
          onClick={onMenuClose}
        >
          close
        </button>
        <ul className="flex flex-col gap-[48px] text-center font-normal text-[18px] leading-normal tracking-[1.8px]">
          {NavBarLinks.map(({ href, title }) => (
            <li
              className="hover:scale-[1.1] focus:scale-[1.1] transition-transform"
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
