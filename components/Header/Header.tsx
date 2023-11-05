import { Logo } from '../ui/Logo';
import { MobMenu } from '../ui/MobMenu';
import { NavBar } from '../ui/NavBar';

export const Header = () => (
  <header className="absolute left-[50%] z-[2] h-[146px] w-full translate-x-[-50%]">
    <div className="container mt-[28px] flex items-center justify-between md:mt-[16px]">
      <Logo />
      <NavBar variant="header" className="smOnly:hidden" />
      <MobMenu />
    </div>
  </header>
);
