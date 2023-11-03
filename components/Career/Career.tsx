import LINKS from '@/constants/links';

import CareerTitle from './components/CareerTitle';
import CareerDescription from './components/CareerDescription';

import '@/styles/career.css';

const Career = () => (
  <section id={LINKS.career}>
    <div className="career background-image min-h-screen">
      <div className="container-padding container">
        <CareerTitle />
        <CareerDescription />
      </div>
    </div>
    <div className="career dublicate background-image md:hidden h-[826px] min-h-screen"></div>
  </section>
);

export default Career;
