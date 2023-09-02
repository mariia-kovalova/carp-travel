import info from '@/data/contact.data.json';

import ContactPhone from './ContactPhone';

const ContactPhoneList = () => (
  <div className="flex gap-[20px] justify-end">
    <ul
      className="text-[14px] leading-[24px] flex flex-col
                    tablet:text-[16px] desktop:text-[18px]"
    >
      {info.phone.items.map(number => (
        <li key={number} className="overflow-hidden">
          <ContactPhone number={number} />
        </li>
      ))}
    </ul>
    <p className="w-[81px] text-[12px] font-extralight leading-[20px] desktop:leading-[24px]">
      {info.phone.title}
    </p>
  </div>
);

export default ContactPhoneList;
