import info from '@/data/contact.data.json';
import ContactSocial from './ContactSocial';

const ContactSocialsList = () => (
  <div className="flex gap-[20px] justify-end">
    <b className="text-[12px] font-extralight leading-[20px] desktop:leading-[24px]">
      Follow us
    </b>
    <ul
      className="flex flex-col w-[81px] text-[14px] leading-[24px]
                tablet:text-[16px] default:text-[18px]"
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
