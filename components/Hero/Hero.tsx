import LINKS from '@/constants/links';

import HeroTitle from './components/HeroTitle';
import HeroDescription from './components/HeroDescription';

import '@/styles/hero.css';

const Hero = () => (
  <section id={LINKS.hero} className="hero background-image min-h-[100vh]">
    <div
      className="smOnly:flex-col xl:pt-[141px] xl:gap-[298px] md:justify-between md:pt-[125px] container 
                relative flex 
                gap-[24px] pt-[182px]"
    >
      <HeroTitle />
      <HeroDescription />
    </div>
  </section>
);

export default Hero;
