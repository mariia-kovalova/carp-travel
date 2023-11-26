import { HeroSection } from '@/sections/HeroSection/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ServicesSection } from '@/sections/ServicesSection';
import { CareerSection } from '@/sections/CareerSection';
import { GallerySection } from '@/sections/GallerySection';
import { ContactSection } from '@/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CareerSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
