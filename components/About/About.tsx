import LINKS from '@/constants/links';
import AboutDescription from './components/AboutDescription';
import AboutTitle from './components/AboutTitle';
import '@/styles/about.css';

const About = () => (
  <section id={LINKS.about} className="about background-image min-h-screen">
    <div className="container container-padding">
      <AboutTitle />
      <AboutDescription />
    </div>
  </section>
);

export default About;
