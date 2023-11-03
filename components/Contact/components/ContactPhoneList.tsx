import info from '@/data/contact.data.json';

import ContactPhone from './ContactPhone';

const ContactPhoneList = () => (
  <div className="flex justify-end gap-[20px]">
    <ul
      className="xl:text-[18px] md:text-[16px] flex flex-col
                    text-[14px] leading-[24px]"
    >
      {info.phone.items.map(number => (
        <li key={number} className="overflow-hidden">
          <ContactPhone number={number} />
        </li>
      ))}
    </ul>
    <p className="xl:leading-[24px] w-[81px] text-[12px] font-extralight leading-[20px]">
      {info.phone.title}
    </p>
  </div>
);

export default ContactPhoneList;
