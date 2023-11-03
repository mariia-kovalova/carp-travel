import LINKS from '@/constants/links';
import info from '@/data/contact.data.json';

import ContactDescription from './components/ContactDescription';
import ContactForm from './components/ContactForm';

import '@/styles/contact.css';

const Contact = () => (
  <section id={LINKS.contact} className="contact background-image min-h-screen">
    <div className="container container-padding">
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
