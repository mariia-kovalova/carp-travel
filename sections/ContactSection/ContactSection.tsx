import { SectionTitle } from '@/components/ui/SectionTitle';
import { ContactList } from '@/components/ui/ContactList';
import { ContactForm } from '@/components/ContactForm';

import { contact } from '@/data/links.data';
import data from '@/data/contact.data.json';

const { title, phones, emails, socials } = data;

export const ContactSection = () => {
  return (
    <section id={contact} className="section contact background-image">
      <div className="container">
        <SectionTitle title={title} />

        <div className="mt-9 md:mt-7 xl:mt-[71px] xl:flex xl:gap-[231px]">
          <div className="mb-3 md:mb-16 md:ml-[34px] xl:ml-[82px] mdOnly:flex mdOnly:gap-[90px]">
            <div className="mb-6 flex flex-col gap-6 md:mb-0 xl:mb-[124px] xl:gap-16">
              <ContactList data={phones} />
              <ContactList data={emails} />
            </div>
            <ContactList data={socials} isInversed={true} />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
