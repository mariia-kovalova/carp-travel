import LINKS from '@/constants/links';
import HeroTitle from './components/HeroTitle';
import HeroDescription from './components/HeroDescription';

import '@/styles/hero.css';

const Hero = () => (
  <section id={LINKS.hero} className="hero background-image min-h-[100vh]">
    <div
      className="container relative pt-[182px] flex max-tablet:flex-col gap-[24px] 
                tablet:pt-[125px] tablet:justify-between 
                desktop:pt-[141px]"
    >
      <HeroTitle />
      <HeroDescription />
    </div>
  </section>
);

export default Hero;
