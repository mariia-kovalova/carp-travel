import LINKS from '@/constants/links';
import info from '@/data/contact.data.json';

import SectionTitle from '@/components/shared/SectionTitle';
import ContactPhoneList from '@/components/contact/ContactPhoneList';
import ContactEmailList from '@/components/contact/ContactEmailList';
import ContactSocialsList from '@/components/contact/ContactSocialsList';
import ContactForm from '@/components/contact/ContactForm';

import '@/styles/contact.css';

const { title } = info;

const Contact = () => (
  <section id={LINKS.contact} className="contact background-image min-h-screen">
    <div className="container container-padding">
      <div className=" mb-[36px] desktop:mb-[95px]">
        <SectionTitle title={title} />
      </div>

      <div className="desktop:flex desktop:gap-[231px]">
        <div
          className="flex flex-col gap-[24px] 
                tablet:max-desktop:flex-row tablet:max-desktop:gap-[90px] tablet:max-desktop:mb-[64px]
                tablet:ml-[34px] desktop:ml-[107px] desktop:gap-[120px]"
        >
          <div className="flex flex-col gap-[24px] desktop:gap-[64px]">
            <ContactPhoneList />
            <ContactEmailList />
          </div>
          <ContactSocialsList />
        </div>
        <ContactForm />
      </div>
    </div>
  </section>
);

export default Contact;
