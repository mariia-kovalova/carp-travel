import info from '@/data/contact.data.json';

import ContactSocial from './ContactSocial';

const ContactSocialsList = () => (
  <div className="flex justify-end gap-[20px]">
    <b className="xl:leading-[24px] text-[12px] font-extralight leading-[20px]">
      Follow us
    </b>
    <ul
      className="md:text-[16px] flex w-[81px] flex-col text-[14px]
                leading-[24px] default:text-[18px]"
    >
      {info.social.items.map(({ href, text }) => (
        <li key={text}>
          <ContactSocial href={href} text={text} />
        </li>
      ))}
    </ul>
  </div>
);

export default ContactSocialsList;
