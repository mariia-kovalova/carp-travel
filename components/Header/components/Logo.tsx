import { karantina } from '@/app/fonts';
import { hero } from '@/constants/links';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={`#${hero}`} className={karantina.className}>
      <Image src="/icons/logo.svg" alt="carp travel" width="61" height="33" />
      <p className="mt-[2px] text-[14px] leading-[14px] tracking-[.185em]">
        CarpTravel
      </p>
    </Link>
  );
};

export default Logo;
