import info from '@/data/contact.data.json';

import ContactDescription from './components/ContactDescription';
import ContactForm from './components/ContactForm';

import '@/styles/contact.css';
import { contact } from '@/data/links.data';

const Contact = () => (
  <section id={contact} className="contact background-image min-h-screen">
    <div className="container-padding container">
      <h2 className="section-title mb-[36px] xl:mb-[95px]">
        {info.title.text}{' '}
        <span className="font-medium">{info.title.accent}</span>
      </h2>
      <div className="xl:flex xl:gap-[231px]">
        <ContactDescription />
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
