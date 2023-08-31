import info from '@/data/contact.data.json';

import ContactEmail from './ContactEmail';

const ContactEmailList = () => {
  return (
    <div className="flex flex-col gap-[24px] desktop:gap-[64px]">
      <div className="flex gap-[20px] justify-end">
        <ul className="flex flex-col text-[14px] leading-[24px] tablet:text-[16px] desktop:text-[18px]">
          {info.email.items.map(email => (
            <li key={email} className="overflow-hidden">
              <ContactEmail email={email} />
            </li>
          ))}
        </ul>
        <p className="w-[81px] text-[12px] font-extralight leading-[20px] desktop:leading-[24px]">
          {info.email.title}
        </p>
      </div>
    </div>
  );
};

export default ContactEmailList;
