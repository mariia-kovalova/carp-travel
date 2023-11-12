import { HeroSection } from '@/sections/HeroSection/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { GallerySection } from '@/sections/GallerySection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      {/*<Career />
      <Gallery />
      <Contact /> */}
    </>
  );
}
