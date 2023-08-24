import { contact } from '@/constants/links';
import '@/styles/contact.css';
import ContactDescription from './components/ContactDescription';
import ContactForm from './components/ContactForm';

const Contact = () => {
  return (
    <section className="contact background-image min-h-screen" id={contact}>
      <div className="container container-padding">
        <h2 className="section-title mb-[36px] desktop:mb-[95px]">
          contact <span className="font-medium">us</span>
        </h2>
        <div className="desktop:flex desktop:gap-[231px]">
          <ContactDescription />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
