import { career } from '@/constants/links';
import CareerTitle from './components/CareerTitle';
import CareerForm from './components/CareerForm';
import CareerDescription from './components/CareerDescription';
import '@/styles/career.css';

const Career = () => (
  <section id={career}>
    <div className="career background-image min-h-screen">
      <div className="container container-padding">
        <CareerTitle />
        <CareerDescription />
      </div>
    </div>
    <div className="career background-image min-h-screen tablet:hidden">
      <div className="container container-padding">
        <CareerForm />
      </div>
    </div>
  </section>
);

export default Career;
