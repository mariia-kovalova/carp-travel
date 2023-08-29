import { karantina } from '@/app/fonts';
import { hero } from '@/constants/links';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/icons/logo.svg';

const Logo = () => {
  return (
    <Link
      href={`#${hero}`}
      className={`${karantina.className} p-[4px] transition-colors 
              hover:bg-transparent-white-dark 
              focus:bg-transparent-white-dark `}
    >
      <Image
        className="h-auto"
        src={logo}
        alt="carp travel logo"
        width="61"
        priority
      />
      <p className="mt-[2px] text-[14px] leading-[14px] tracking-[.185em]">
        CarpTravel
      </p>
    </Link>
  );
};

export default Logo;
