import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Career from '@/components/Career/Career';
import Gallery from '@/components/Gallery/Gallery';
import Contact from '@/components/Contact/Contact';

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
