import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/services/Services';
import Career from '@/components/career/Career';
import Gallery from '@/components/gallery/Gallery';
import Contact from '@/components/contact/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Career />
      <Gallery />
      <Contact />
    </>
  );
}
