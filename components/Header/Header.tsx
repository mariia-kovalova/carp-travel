'use client';

import { useState } from 'react';

import Logo from './components/Logo';
import MobMenu from './components/MobMenu';
import NavBar from './components/NavBar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="absolute left-[50%] translate-x-[-50%] z-[1200] w-full h-[146px]">
      <div className="container flex justify-between items-center pt-[36px] tablet:pt-[24px]">
        <Logo />
        <NavBar />
        <button
          className="tablet:hidden text-[14px] font-normal leading-normal tracking-[1.4px] uppercase"
          type="button"
          onClick={handleToggleMenu}
        >
          menu
        </button>

        {isOpen && <MobMenu onMenuClose={handleToggleMenu} />}
      </div>
    </header>
  );
};

export default Header;
