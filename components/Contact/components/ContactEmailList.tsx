import info from '@/data/contact.data.json';

import ContactEmail from './ContactEmail';

const ContactEmailList = () => {
  return (
    <div className="xl:gap-[64px] flex flex-col gap-[24px]">
      <div className="flex justify-end gap-[20px]">
        <ul className="md:text-base xl:text-lg flex flex-col  leading-[24px]">
          {info.email.items.map(email => (
            <li key={email} className="overflow-hidden">
              <ContactEmail email={email} />
            </li>
          ))}
        </ul>
        <p className="xl:leading-[24px] w-[81px] text-xs  leading-[20px]">
          {info.email.title}
        </p>
      </div>
    </div>
  );
};

export default ContactEmailList;
