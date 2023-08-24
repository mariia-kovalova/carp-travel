import { contact } from '@/constants/links';
import '@/styles/contact.css';

const Contact = () => {
  return (
    <section className="contact background-image min-h-screen" id={contact}>
      <div className="container container-padding">
        <h2 className="section-title">
          contact <span className="font-medium">us</span>
        </h2>
      </div>
    </section>
  );
};

export default Contact;
