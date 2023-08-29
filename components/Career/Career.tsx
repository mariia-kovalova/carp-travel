import LINKS from '@/constants/links';
import CareerTitle from './components/CareerTitle';
import CareerDescription from './components/CareerDescription';
import '@/styles/career.css';

const Career = () => (
  <section id={LINKS.career}>
    <div className="career background-image min-h-screen">
      <div className="container container-padding">
        <CareerTitle />
        <CareerDescription />
      </div>
    </div>
    <div className="career dublicate background-image min-h-screen h-[826px] tablet:hidden"></div>
  </section>
);

export default Career;
