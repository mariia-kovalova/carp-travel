import About from '@/components/About/About';
import Career from '@/components/Career/Career';
import Contact from '@/components/Contact/Contact';
import Gallery from '@/components/Gallery/Gallery';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';

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
