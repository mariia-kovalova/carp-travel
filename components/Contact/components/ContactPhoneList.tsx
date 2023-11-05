import info from '@/data/contact.data.json';

import ContactPhone from './ContactPhone';

const ContactPhoneList = () => (
  <div className="flex justify-end gap-[20px]">
    <ul
      className="xl:text-lg md:text-base flex flex-col
                     leading-[24px]"
    >
      {info.phone.items.map(number => (
        <li key={number} className="overflow-hidden">
          <ContactPhone number={number} />
        </li>
      ))}
    </ul>
    <p className="xl:leading-[24px] w-[81px] text-xs  leading-[20px]">
      {info.phone.title}
    </p>
  </div>
);

export default ContactPhoneList;
