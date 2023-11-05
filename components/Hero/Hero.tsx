import HeroTitle from './components/HeroTitle';
import HeroDescription from './components/HeroDescription';

import '@/styles/hero.css';

const Hero = () => (
  <section className="hero background-image min-h-[100vh]">
    <div
      className="container relative flex gap-[24px] pt-[182px] md:justify-between 
                md:pt-[125px] xl:gap-[298px] 
                xl:pt-[141px] smOnly:flex-col"
    >
      <HeroTitle />
      <HeroDescription />
    </div>
  </section>
);

export default Hero;
