'use client';

import { useState } from 'react';

import Logo from './Logo';
import NavBar from './NavBar';
import MobMenu from './MobMenu';
import Modal from './Modal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <header className="absolute left-[50%] translate-x-[-50%] z-[2] w-full h-[146px]">
      <div className="container flex justify-between items-center mt-[28px] tablet:mt-[16px]">
        <Logo />
        <NavBar />
        <button
          className="tablet:hidden text-[14px] font-normal leading-normal tracking-[1.4px] uppercase"
          type="button"
          onClick={handleToggleMenu}
        >
          menu
        </button>

        {isOpen ? (
          <Modal>
            <MobMenu onMenuClose={handleToggleMenu} />
          </Modal>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
