'use client';

import { useState } from 'react';
import { NavBar } from '../ui/NavBar';
import data from '@/data/header.data.json';

const { open, close } = data.mob_menu;

export const MobMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    document.body.classList.toggle('overflow-hidden');
    setShowMenu(prev => !prev);
  };

  return (
    <>
      <button
        className="mt-[2px] block text-sm font-normal uppercase tracking-[1.4px] md:hidden"
        onClick={handleToggleMenu}
        type="button"
      >
        {open}
      </button>

      {showMenu ? (
        <div className="absolute left-0 top-0 z-[3] h-[100vh] w-[100vw] bg-grey/75 backdrop-blur-[25px] md:hidden">
          <nav className="container relative flex h-full items-center justify-center">
            <button
              className="absolute right-[18px] top-[44px] font-normal uppercase leading-normal tracking-[1.4px]"
              type="button"
              onClick={handleToggleMenu}
            >
              {close}
            </button>
            <NavBar variant="mobile-menu" onClick={handleToggleMenu} />
          </nav>
        </div>
      ) : null}
    </>
  );
};
