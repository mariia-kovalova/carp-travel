import CareerTitle from './components/CareerTitle';
import CareerDescription from './components/CareerDescription';

import '@/styles/career.css';
import { career } from '@/data/links.data';

const Career = () => (
  <section id={career}>
    <div className="career background-image min-h-screen">
      <div className="container-padding container">
        <CareerTitle />
        <CareerDescription />
      </div>
    </div>
    <div className="career dublicate background-image h-[826px] min-h-screen md:hidden"></div>
  </section>
);

export default Career;
