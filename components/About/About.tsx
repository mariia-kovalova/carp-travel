import { about } from '@/data/links.data';
import AboutDescription from './components/AboutDescription';
import AboutTitle from './components/AboutTitle';

import '@/styles/about.css';

const About = () => (
  <section id={about} className="about background-image min-h-screen">
    <div className="container-padding container">
      <AboutTitle />
      <AboutDescription />
    </div>
  </section>
);

export default About;
