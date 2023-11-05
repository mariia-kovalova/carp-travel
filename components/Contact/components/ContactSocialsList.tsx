import info from '@/data/contact.data.json';

import ContactSocial from './ContactSocial';

const ContactSocialsList = () => (
  <div className="flex justify-end gap-[20px]">
    <b className="xl:leading-[24px] text-xs  leading-[20px]">Follow us</b>
    <ul
      className="md:text-base flex w-[81px] flex-col 
                leading-[24px] default:text-lg"
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
