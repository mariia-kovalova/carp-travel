'use client';

import { useState } from 'react';

import Logo from '../shared/Logo';
import NavBar from './components/NavBar';
import MobMenu from './components/MobMenu';
import Modal from '../shared/Modal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <header className="absolute left-[50%] z-[2] h-[146px] w-full translate-x-[-50%]">
      <div className="md:mt-[16px] container mt-[28px] flex items-center justify-between">
        <Logo />
        <NavBar />
        <button
          className="md:hidden text-[14px] font-normal uppercase leading-normal tracking-[1.4px]"
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
