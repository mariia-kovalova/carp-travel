import { about } from '@/constants/links';
import AboutDescription from './components/AboutDescription';
import AboutTitle from './components/AboutTitle';
import '@/styles/about.css';

const About = () => (
  <section className="about background-image min-h-screen" id={about}>
    <div
      className="container py-[55px]
                      tablet:py-[64px]
                      desktop:py-[107px]"
    >
      <AboutTitle />
      <AboutDescription />
    </div>
  </section>
);

export default About;
